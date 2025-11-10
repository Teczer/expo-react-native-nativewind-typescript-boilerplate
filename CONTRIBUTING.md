# Contributing to Fast Expo App

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Improving The Documentation](#improving-the-documentation)
- [Styleguides](#styleguides)
  - [Commit Messages](#commit-messages)
  - [Code Style](#code-style)
- [Join The Project Team](#join-the-project-team)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/blob/main/README.md).

Before you ask a question, it is best to search for existing [Issues](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (Node.js, npm, Expo, React Native, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

## I Want To Contribute

> ### Legal Notice
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/blob/main/README.md)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues?q=label%3Abug).
- Collect information about the bug:
  - Stack trace (Traceback)
  - OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
  - Version of Node.js, Expo, React Native, and other relevant dependencies
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it with older versions?

#### How Do I Submit a Good Bug Report?

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues/new).
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the *reproduction steps* that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro`. Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `confirmed`, as well as possibly other tags (such as `critical`), and the issue will be left to be implemented by someone.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Fast Expo App, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/blob/main/README.md) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature.

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/Teczer/expo-react-native-nativewind-typescript-boilerplate/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots or screen recordings** which help you demonstrate the steps or point out the part which the suggestion is related to.
- **Explain why this enhancement would be useful** to most Fast Expo App users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

### Your First Code Contribution

#### Development Setup

1. **Fork the repository** and clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/expo-react-native-nativewind-typescript-boilerplate.git
   cd expo-react-native-nativewind-typescript-boilerplate
   ```

2. **Install dependencies** (We recommend using Bun):
   ```bash
   bun install
   ```

3. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make your changes** following our [code style guidelines](#code-style)

5. **Test your changes**:
   ```bash
   # Run linter
   bun run lint
   
   # Format code
   bun run format
   
   # Run tests (if applicable)
   bun run test
   
   # Test on iOS
   bun run ios
   
   # Test on Android
   bun run android
   ```

6. **Commit your changes** using our [commit message guidelines](#commit-messages)

7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request** from your fork to the main repository

#### Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md or relevant documentation with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Make sure your code follows the project's code style (run `bun run lint` and `bun run format`).
4. Ensure your branch is up to date with the main branch.
5. The PR title should follow the format: `type(scope): description`
   - Examples: `feat: add dark mode toggle`, `fix: resolve navigation crash`, `docs: update README`
6. Provide a clear description of what your PR does and why.
7. Link any related issues in your PR description (e.g., "Closes #123").
8. Your PR may be merged once you have the sign-off of one maintainer.

### Improving The Documentation

Documentation is crucial for helping users understand and use Fast Expo App. We welcome contributions to:

- **README.md** - General project information and getting started guide
- **AGENTS.md** - AI assistant documentation for development
- **Code comments** - Inline documentation for complex logic
- **Examples** - Sample code and usage examples

To contribute to documentation:

1. Follow the same process as [code contributions](#your-first-code-contribution)
2. Ensure your documentation is clear, concise, and accurate
3. Use proper markdown formatting
4. Include code examples where applicable
5. Proofread for grammar and spelling

## Styleguides

### Commit Messages

We follow conventional commits specification. Your commit messages should be structured as follows:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```
feat: add MMKV v4 support with Nitro Modules

Updated MMKV to version 4 which uses the new Nitro Modules architecture.
This provides better performance and a cleaner API.

Closes #123

fix(ios): resolve zlib linker error

Added -lz flag to Podfile to explicitly link zlib library.
This fixes the _crc32 undefined symbol error.

docs: update README with React Query examples

Added comprehensive examples showing how to use React Query
for data fetching in the application.
```

### Code Style

This project uses ESLint and Prettier to enforce code style. Please ensure your code passes these checks:

```bash
# Check linting
bun run lint

# Auto-fix linting issues
bun run lint --fix

# Format code
bun run format

# Check formatting
bun run format:check
```

**Key style guidelines:**

- **TypeScript**: Use TypeScript for all new files
- **Naming Conventions**:
  - Components: PascalCase (e.g., `UserProfile.tsx`)
  - Files/Folders: kebab-case (e.g., `user-profile.tsx`)
  - Variables/Functions: camelCase (e.g., `getUserData`)
  - Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
  
- **React Components**:
  ```typescript
  import { View, Text } from 'react-native';
  
  interface UserCardProps {
    name: string;
    email: string;
  }
  
  export function UserCard(props: UserCardProps) {
    const { name, email } = props;
    
    return (
      <View className="p-4 bg-white rounded-lg">
        <Text className="text-lg font-bold">{name}</Text>
        <Text className="text-sm text-gray-600">{email}</Text>
      </View>
    );
  }
  ```

- **Styling**: Use NativeWind classes instead of inline styles
  ```typescript
  // ✅ Good
  <View className="flex-1 items-center justify-center">
  
  // ❌ Avoid
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  ```

- **Imports**: Use absolute imports with `@` prefix
  ```typescript
  import { storage } from '@/lib/mmkv';
  import { UserCard } from '@/components/UserCard';
  ```

## Join The Project Team

If you're interested in becoming a regular contributor or maintainer, please reach out by:

1. Contributing several high-quality PRs
2. Helping review other contributors' PRs
3. Helping answer issues and questions
4. Showing consistent engagement with the project

We're always looking for passionate contributors to join the team!

---

## Recognition

Contributors will be recognized in:
- Release notes for significant contributions
- README.md contributors section
- GitHub's contributors page

---

## Questions?

Feel free to reach out by opening an issue or discussion on GitHub. We're here to help!

---

**Thank you for contributing to Fast Expo App! 🚀**

Made with ♥ by [Teczer](https://github.com/Teczer) and contributors

