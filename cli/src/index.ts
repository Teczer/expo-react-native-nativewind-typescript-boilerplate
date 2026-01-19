#!/usr/bin/env node

import * as p from '@clack/prompts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { printBanner } from './ascii-art.js';

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
      const stat = fs.lstatSync(fromPath);

      if (stat.isSymbolicLink()) {
        continue;
      }

      if (stat.isDirectory()) {
        copyFolderSync(fromPath, toPath, basePath);
      } else {
        fs.copyFileSync(fromPath, toPath);
      }
    } catch (error) {
      // Ignorer les erreurs de fichiers inaccessibles
    }
  }
}

async function main() {
  const startTime = Date.now();

  // Clear console and show banner
  console.clear();
  printBanner();

  p.intro('Fast Expo App');

  // 1. Prompt pour le nom du projet
  const projectName = await p.text({
    message: 'Enter your project name or path',
    placeholder: 'my-expo-app',
    defaultValue: 'my-expo-app',
    validate: (value) => {
      if (!value || value.length === 0) {
        return 'Project name cannot be empty';
      }
      if (fs.existsSync(value)) {
        return `Folder "${value}" already exists`;
      }
      return;
    },
  });

  if (p.isCancel(projectName)) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  // 2. Prompt pour le choix du système de styling (OBLIGATOIRE)
  const styling = await p.select({
    message: 'Choose a styling solution (required)',
    options: [
      {
        value: 'nativewind',
        label: 'NativeWind',
        hint: 'Tailwind CSS for React Native',
      },
      {
        value: 'unistyles',
        label: 'Unistyles',
        hint: 'Type-safe styling solution',
      },
      {
        value: 'uniwind',
        label: 'Uniwind',
        hint: 'Tailwind + Type-safe with 3 themes',
      },
    ],
    initialValue: 'nativewind',
  });

  if (p.isCancel(styling)) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  // 3. Prompt pour la sélection des modules (MMKV est obligatoire)
  const modules = await p.multiselect({
    message: 'Select optional modules (MMKV is included by default)',
    options: [
      {
        value: 'zustand',
        label: 'Zustand',
        hint: 'Lightweight state management',
      },
      {
        value: 'expo-dev-client',
        label: 'expo-dev-client',
        hint: 'Enhanced debugging & custom native modules',
      },
      {
        value: 'react-query',
        label: 'React Query',
        hint: 'Powerful data fetching & server state management',
      },
      {
        value: 'jest',
        label: 'Jest',
        hint: 'Unit testing framework',
      },
    ],
    required: false,
    initialValues: ['expo-dev-client', 'react-query', 'jest'],
  });

  if (p.isCancel(modules)) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  // MMKV is always included
  const allModules = ['mmkv', ...modules];

  // 4. Ask about git initialization
  const initGit = await p.confirm({
    message: 'Initialize git repository?',
    initialValue: true,
  });

  if (p.isCancel(initGit)) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  // 5. Ask about package manager
  const packageManager = await p.select({
    message: 'Choose package manager',
    options: [
      { value: 'bun', label: 'Bun', hint: 'Recommended' },
      { value: 'npm', label: 'npm' },
      { value: 'yarn', label: 'Yarn' },
      { value: 'pnpm', label: 'pnpm' },
    ],
    initialValue: 'bun',
  });

  if (p.isCancel(packageManager)) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  // 6. Ask about installing dependencies
  const installDeps = await p.confirm({
    message: 'Install dependencies?',
    initialValue: true,
  });

  if (p.isCancel(installDeps)) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  // Show selected options
  const stylingLabel = styling === 'nativewind' ? 'NativeWind' : styling === 'unistyles' ? 'Unistyles' : styling === 'uniwind' ? 'Uniwind' : 'StyleSheet';
  p.note(
    [
      `Frontend: Expo + ${stylingLabel}`,
      `Modules: ${allModules.join(', ')}`,
      `Package Manager: ${packageManager}`,
    ].join('\n'),
    'Using these options'
  );

  // 7. Start creating project
  const spinner = p.spinner();
  spinner.start('Creating your project...');

  const templatePath = path.join(__dirname, '..', 'templates', 'base');
  const targetPath = path.join(process.cwd(), projectName as string);

  if (!fs.existsSync(templatePath)) {
    spinner.stop('❌ Template not found');
    p.cancel(`Template not found at: ${templatePath}`);
    process.exit(1);
  }

  copyFolderSync(templatePath, targetPath);

  // 8. Generate project files using modules (MMKV is always included)
  const { generateProject } = await import('./generate-project.js');
  await generateProject(
    projectName as string,
    allModules as string[],
    styling as string,
    targetPath
  );

  // 9. Initialize git if requested
  if (initGit) {
    spinner.message('Initializing git repository...');
    try {
      const { execSync } = await import('child_process');
      execSync('git init', { cwd: targetPath, stdio: 'ignore' });
    } catch (error) {
      // Git might not be installed, ignore
    }
  }

  // 10. Install dependencies if requested
  if (installDeps) {
    spinner.message('Installing dependencies...');
    try {
      const { execSync } = await import('child_process');
      const installCmd =
        packageManager === 'bun'
          ? 'bun install'
          : packageManager === 'yarn'
            ? 'yarn install'
            : packageManager === 'pnpm'
              ? 'pnpm install'
              : 'npm install';
      execSync(installCmd, { cwd: targetPath, stdio: 'inherit' });
      spinner.stop('✅ Dependencies installed successfully');
    } catch (error) {
      spinner.stop('⚠️  Failed to install dependencies');
      p.note('You can install them manually later', 'Installation failed');
    }
  } else {
    spinner.stop('✅ Project created successfully');
  }

  // Calculate elapsed time
  const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);

  // 11. Success message
  p.outro('Project template successfully scaffolded! ✨');

  const nextSteps = [
    `cd ${projectName}`,
    installDeps
      ? ''
      : `${packageManager === 'bun' ? 'bun' : packageManager === 'yarn' ? 'yarn' : packageManager === 'pnpm' ? 'pnpm' : 'npm'} install`,
    'npx expo prebuild',
    'bun ios | bun android',
  ]
    .filter(Boolean)
    .join('\n');

  p.note(nextSteps, 'Next steps');

  const kleur = (await import('kleur')).default;
  console.log(`\n${kleur.gray(`Project created successfully in ${elapsedTime} seconds!`)}\n`);
}

main().catch((error) => {
  p.cancel(`An error occurred: ${error.message}`);
  process.exit(1);
});
