## Overview

**demoQA-automation-playwright** is a repository that demonstrates automated testing of the demoQA website using Playwright. This project aims to provide a comprehensive framework for testing web applications with a focus on reliability and performance.

## Features

- **Cross-browser Testing**: Supports testing across multiple browsers including Chromium, Firefox, and WebKit.
- **Easy Setup**: Simple installation and configuration process.
- **Page Object Model**: Implements the Page Object Model design pattern for better maintainability.
- **Test Reporting**: Generates detailed test reports for easy analysis.
- **CI/CD Integration**: Easily integrates with CI/CD pipelines for automated testing.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/hasanazeerkhan/demoQA-automation-playwright.git
   ```

2. Navigate to the project directory:
   ```bash
   cd demoQA-automation-playwright
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the tests, use the following command:

```bash
npx playwright test
```

You can also specify a particular test file to run:

```bash
npx playwright test path/to/testfile.spec.js
```

## Directory Structure

```
demoQA-automation-playwright/
├── tests/                # Contains all test files
├── pages/                # Page object files
├── reports/              # Test reports
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## Acknowledgments

- Thanks to the Playwright team for creating an amazing testing framework.
- Special thanks to the demoQA team for providing a great platform for testing.