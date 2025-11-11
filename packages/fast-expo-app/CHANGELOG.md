# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-11-10

### Changed
- **BREAKING**: Switched from GitHub cloning to local template copying for faster project generation
- Updated to use ES modules instead of CommonJS
- Improved CLI output with better colors and formatting using Chalk
- Added project name validation
- Added better error handling

### Removed
- Removed `degit` dependency (no longer needed)

### Added
- Local template system for instant project creation
- Enhanced user experience with colored output
- Project name automatically updates in generated package.json

## [1.0.0] - Initial Release

### Added
- Interactive CLI for creating Expo apps
- Support for TypeScript
- NativeWind (Tailwind CSS) integration
- Expo Router for file-based navigation
- Optional MMKV storage
- Optional expo-dev-client
- Optional React Query
- Optional Jest testing
- Dark mode support

