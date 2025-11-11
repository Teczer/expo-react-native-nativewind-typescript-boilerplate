#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dossiers et fichiers à ignorer lors de la copie
const IGNORE_PATTERNS = [
  'node_modules',
  '.expo',
  '.git',
  '.DS_Store',
  'ios/Pods',
  'ios/build',
  'android/build',
  'android/.gradle',
  'bun.lock',
  'package-lock.json',
  'yarn.lock',
];

// Fonction pour copier un dossier récursivement
function copyFolderSync(from: string, to: string, basePath: string = from) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }

  const files = fs.readdirSync(from);

  for (const file of files) {
    const fromPath = path.join(from, file);
    const toPath = path.join(to, file);
    const relativePath = path.relative(basePath, fromPath);

    // Ignorer les fichiers/dossiers dans IGNORE_PATTERNS
    if (IGNORE_PATTERNS.some((pattern) => relativePath.includes(pattern) || file === pattern)) {
      continue;
    }

    try {
      const stat = fs.lstatSync(fromPath); // Utiliser lstatSync pour détecter les liens symboliques

      if (stat.isSymbolicLink()) {
        // Ignorer les liens symboliques
        continue;
      }

      if (stat.isDirectory()) {
        copyFolderSync(fromPath, toPath, basePath);
      } else {
        fs.copyFileSync(fromPath, toPath);
      }
    } catch (error) {
      // Ignorer les erreurs de fichiers inaccessibles
      console.log(chalk.yellow(`   ⚠️  Skipping: ${relativePath}`));
    }
  }
}

async function main() {
  console.log(chalk.bold.cyan('\n🚀 Welcome to Fast Expo App!\n'));

  // 1. Prompt pour le nom du projet
  const { projectName } = await inquirer.prompt<{ projectName: string }>([
    {
      type: 'input',
      name: 'projectName',
      message: 'What do you want to name your project ?',
      default: 'my-app',
      validate: (input: string) => {
        if (input.length === 0) {
          return 'Project name cannot be empty';
        }
        if (fs.existsSync(input)) {
          return `Folder "${input}" already exists`;
        }
        return true;
      },
    },
  ]);

  // 2. Instructions pour les checkbox
  console.log(
    chalk.dim('\n💡 Tip: Use ↑↓ arrows to navigate, Space to select/deselect, Enter to confirm\n')
  );

  // 3. Prompt pour la sélection des modules
  const { modules } = await inquirer.prompt<{ modules: string[] }>([
    {
      type: 'checkbox',
      name: 'modules',
      message: 'Select the modules you want to include:',
      choices: [
        {
          name: 'MMKV (ultra-fast storage ~30x faster than AsyncStorage)',
          value: 'mmkv',
          checked: true,
        },
        {
          name: 'expo-dev-client (enhanced debugging & custom native modules)',
          value: 'expo-dev-client',
          checked: true,
        },
        {
          name: 'React Query (powerful data fetching & server state management)',
          value: 'react-query',
          checked: true,
        },
        {
          name: 'Jest (unit testing framework)',
          value: 'jest',
          checked: true,
        },
      ],
    },
  ]);

  // 4. Copier le template
  console.log(chalk.cyan('\n📦 Creating your project...\n'));

  const templatePath = path.join(__dirname, '..', 'templates', 'base');
  const targetPath = path.join(process.cwd(), projectName);

  if (!fs.existsSync(templatePath)) {
    console.error(chalk.red(`❌ Template not found at: ${templatePath}`));
    process.exit(1);
  }

  copyFolderSync(templatePath, targetPath);

  // 5. Lire le package.json
  const pkgPath = path.join(targetPath, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

  // 6. Mettre à jour le nom du projet dans package.json
  pkg.name = projectName;

  // 7. Supprimer les modules non sélectionnés
  if (!modules.includes('mmkv')) {
    console.log(chalk.yellow('   🗑️  Removing MMKV...'));
    if (pkg.dependencies?.['react-native-mmkv']) {
      delete pkg.dependencies['react-native-mmkv'];
    }
    if (pkg.dependencies?.['react-native-nitro-modules']) {
      delete pkg.dependencies['react-native-nitro-modules'];
    }
    if (pkg.devDependencies?.['react-native-mmkv']) {
      delete pkg.devDependencies['react-native-mmkv'];
    }
    if (pkg.devDependencies?.['react-native-nitro-modules']) {
      delete pkg.devDependencies['react-native-nitro-modules'];
    }
    const mmkvFile = path.join(targetPath, 'lib', 'mmkv.ts');
    if (fs.existsSync(mmkvFile)) {
      fs.rmSync(mmkvFile, { force: true });
    }
  }

  if (!modules.includes('expo-dev-client')) {
    console.log(chalk.yellow('   🗑️  Removing expo-dev-client...'));
    if (pkg.dependencies?.['expo-dev-client']) {
      delete pkg.dependencies['expo-dev-client'];
    }
    if (pkg.scripts?.['dev']) {
      delete pkg.scripts['dev'];
    }
  }

  if (!modules.includes('react-query')) {
    console.log(chalk.yellow('   🗑️  Removing React Query...'));
    if (pkg.dependencies?.['@tanstack/react-query']) {
      delete pkg.dependencies['@tanstack/react-query'];
    }
    const queryClientFile = path.join(targetPath, 'lib', 'query-client.ts');
    if (fs.existsSync(queryClientFile)) {
      fs.rmSync(queryClientFile, { force: true });
    }

    // Supprimer QueryClientProvider de _layout.tsx
    const layoutPath = path.join(targetPath, 'app', '_layout.tsx');
    if (fs.existsSync(layoutPath)) {
      let layoutContent = fs.readFileSync(layoutPath, 'utf-8');
      layoutContent = layoutContent.replace(/import.*@tanstack\/react-query.*\n/g, '');
      layoutContent = layoutContent.replace(/import.*query-client.*\n/g, '');
      layoutContent = layoutContent.replace(/<QueryClientProvider[^>]*>/g, '');
      layoutContent = layoutContent.replace(/<\/QueryClientProvider>/g, '');
      fs.writeFileSync(layoutPath, layoutContent);
    }
  }

  if (!modules.includes('jest')) {
    console.log(chalk.yellow('   🗑️  Removing Jest...'));
    if (pkg.scripts?.['test']) {
      delete pkg.scripts['test'];
    }
    if (pkg.dependencies?.['jest']) {
      delete pkg.dependencies['jest'];
    }
    if (pkg.devDependencies?.['jest']) {
      delete pkg.devDependencies['jest'];
    }
    if (pkg.devDependencies?.['@testing-library/react-native']) {
      delete pkg.devDependencies['@testing-library/react-native'];
    }
    const testsDir = path.join(targetPath, '__tests__');
    if (fs.existsSync(testsDir)) {
      fs.rmSync(testsDir, { recursive: true, force: true });
    }
  }

  // 8. Écrire le package.json mis à jour
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  // 9. Message de succès
  console.log(chalk.green(`\n✅ Project "${projectName}" is ready!\n`));
  console.log(
    chalk.cyan(`📦 Included modules: ${modules.length > 0 ? modules.join(', ') : 'none'}`)
  );
  console.log(chalk.bold('\n🚀 Next steps:'));
  console.log(chalk.white(`   cd ${projectName}`));
  console.log(chalk.white(`   bun install`));
  console.log(chalk.white(`   npx expo prebuild`));
  console.log(chalk.white(`   bun ios | bun android\n`));
}

main();
