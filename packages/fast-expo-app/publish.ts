#!/usr/bin/env bun

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const PACKAGE_PATH = path.resolve(__dirname, 'package.json');
const ROOT_PATH = path.resolve(__dirname, '..', '..');

function bumpVersion(version: string, type: 'patch' | 'minor' | 'major' = 'patch') {
  const [major, minor, patch] = version.split('.').map(Number);
  if (type === 'major') return `${major + 1}.0.0`;
  if (type === 'minor') return `${major}.${minor + 1}.0`;
  return `${major}.${minor}.${patch + 1}`;
}

function main() {
  const type = (process.argv[2] as 'patch' | 'minor' | 'major') || 'patch';

  console.log('📦 Fast Expo App - Publishing to npm\n');

  // 1. Read current version
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf-8'));
  const oldVersion = pkg.version;
  const newVersion = bumpVersion(oldVersion, type);

  console.log(`🔢 Bumping version: ${oldVersion} → ${newVersion} (${type})`);
  pkg.version = newVersion;
  fs.writeFileSync(PACKAGE_PATH, JSON.stringify(pkg, null, 2) + '\n');

  // 2. Build the package
  console.log('\n🏗️  Building package...');
  execSync('bun run build', { cwd: ROOT_PATH, stdio: 'inherit' });

  // 3. Update CHANGELOG (optional)
  const changelogPath = path.join(__dirname, 'CHANGELOG.md');
  const today = new Date().toISOString().split('T')[0];
  const changelogEntry = `\n## [${newVersion}] - ${today}\n\n### Changed\n- Version bump\n`;

  if (fs.existsSync(changelogPath)) {
    const changelog = fs.readFileSync(changelogPath, 'utf-8');
    const newChangelog = changelog.replace(
      '# Changelog',
      `# Changelog${changelogEntry}`
    );
    fs.writeFileSync(changelogPath, newChangelog);
    console.log('📝 Updated CHANGELOG.md');
  }

  // 4. Publish to npm
  console.log('\n🚀 Publishing to npm...');
  try {
    execSync('npm publish --access public', { cwd: __dirname, stdio: 'inherit' });
    console.log(`\n✅ Successfully published fast-expo-app@${newVersion}!`);
    console.log(`\n📦 Install with:`);
    console.log(`   npx fast-expo-app@${newVersion}`);
    console.log(`   # or`);
    console.log(`   bunx fast-expo-app@${newVersion}`);
  } catch (error) {
    console.error('\n❌ Failed to publish to npm');
    console.error('Reverting version bump...');
    pkg.version = oldVersion;
    fs.writeFileSync(PACKAGE_PATH, JSON.stringify(pkg, null, 2) + '\n');
    process.exit(1);
  }

  // 5. Commit version bump (optional)
  console.log('\n💡 Tip: Commit the version bump:');
  console.log(`   git add packages/fast-expo-app/package.json packages/fast-expo-app/CHANGELOG.md`);
  console.log(`   git commit -m "chore: bump fast-expo-app to v${newVersion}"`);
  console.log(`   git tag v${newVersion}`);
  console.log(`   git push origin main --tags`);
}

main();

