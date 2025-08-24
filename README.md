# Cypress DemoQA Tests

This repository contains end-to-end test automation for the [DemoQA](https://demoqa.com/) website using Cypress.  
Covers multiple pages and components including Forms, Check Boxes,
    Web Tables, Buttons, Alerts, and Widgets. Uses a modular structure,
    reusable helpers, and best practices for maintainable and scalable tests.


## 📁 Project Structure:
```
  cypress-demoqa-tests/
│
├── cypress/
│ ├── e2e/
│ │   └── spec files
│ ├── support/
│ │   └── helper files
│ └── configs/
│     └── config files for different test setups
│
├── .gitignore # Ignores node_modules and Cypress videos/screenshots
├── cypress.config.js # Cypress configuration
├── package.json # Project dependencies and scripts
└── README.md # You're here!
```
## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cypress-demoqa-tests.git
   cd cypress-demoqa-tests
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Open Cypress Test Runner**
   ```bash
   npx cypress open
   ```

4. **Run tests in headless mode**
   ```bash
   npx cypress run
   ```

5. **Run tests with a specific config file**
   ```bash
   npx cypress run --config-file cypress/configs/<config-file-name>.js
   ```
   **Example:**
   ```bash
   npx cypress run --config-file cypress/configs/buttons.config.js
   ```

---

## ✅ Features
  
  - Comprehensive Test Coverage: "Automation for multiple DemoQA pages including Forms, Check Boxes, Web Tables, Buttons, Alerts, Widgets, and more."
  - Modular Structure: "Clear separation of test logic, helpers, and spec files for maintainability."
  - Reusable Helpers: "Functions for interacting with elements, filling forms, verifying values, and handling dropdowns."
  - Locator Abstraction: "All UI element selectors are centralized for easy updates and readability."
  - Clean Test Cases: "Spec files only contain 'it()' blocks; all logic resides in helper files."
  - Scalable Design: "Easily add new components, test scenarios, or pages without restructuring the project."
  - Flexible Configurations: "Multiple '.config.js' files allow targeted test runs with different settings."
  - Robust Validation: "Supports positive and negative test cases including form validations, dropdown checks, and modal verifications."
---
