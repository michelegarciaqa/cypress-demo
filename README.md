# Cypress Demo Project

This repository showcases a demonstration of a fully configured end-to-end (E2E) testing project using **Cypress**, designed for web browsers.

### Features

- **Cross-Browser Testing**: Execute tests across multiple browsers including Chrome, Firefox, and Edge.
- **Easy Setup**: Quick and simple configuration to get started without hassle.
- **Continuous Integration (CI)**: Automatically run tests on every push to GitHub with GitHub Actions.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 12.x)
- npm or yarn

### Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/michelegarciaqa/cypress-demo
cd cypress-demo
npm install
````

### Running Tests
To run the Cypress tests, use the following command:

```bash
npm rum cy:open
````

This will open the Cypress Test Runner, where you can run the tests interactively. Alternatively, you can run the tests in headless mode:

```bash
npx cypress run
````

### GitHub Actions for CI
This repository is integrated with GitHub Actions to automatically run Cypress tests on each push to the main branch. The workflow file is located in the .github/workflows directory. It ensures that the tests are executed whenever new code is pushed to GitHub.

You can track the status of the CI workflow by visiting the Actions tab of the repository on GitHub. If any tests fail, the workflow will show detailed logs for troubleshooting.

### Customization
Feel free to dive into the cypress/integration directory and customize the test scripts to fit your specific needs. Whether you want to add new test cases or tweak existing ones, feel free to experiment and make it your own!

### Conclusion
This project demonstrates how to use Cypress for end-to-end testing across multiple web browsers, integrated with GitHub Actions for continuous integration. Explore the code, run tests, and modify it to suit your requirements!
