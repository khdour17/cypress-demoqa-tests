# Cypress DemoQA Tests

This repository contains end-to-end test automation for the [DemoQA](https://demoqa.com/) website using Cypress.  
The project focuses on testing the **Check Box** component with a clean structure, modular helpers, and Cypress best practices.


## 📁 Project Structure:
```
  cypress-demoqa-tests/
│
├── cypress/
│ ├── e2e/
│ │ └── spec files
│ └── support/
│ ├──  helper files
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

---

## ✅ Features

- Fully modular structure with clear separation of test logic and test execution
- Reusable helper functions for better maintainability
- Clear locator abstraction for UI elements
- Clean and readable test cases using Cypress `it()` blocks only
- Scalable structure for adding more components or test scenarios

---
