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
features:
  - Cypress automation for the Check Box component
  - Modular and maintainable structure
  - Page visit and reusable helper methods
  - Expand/collapse verification
  - Checkbox selection and result output checks
  - All logic lives in helper files, no Cypress code in spec file
installation:
  - step: Clone the repository
    command: |
      git clone https://github.com/khdour17/cypress-demoqa-tests.git
      cd cypress-demoqa-tests
  - step: Install dependencies
    command: npm install
running_tests:
  gui:
    description: Run tests using the Cypress Test Runner GUI
    command: npx cypress open
  headless:
    description: Run all tests in headless mode
    command: npx cypress run
  specific_file:
    description: Run a specific test file
    command: npx cypress run --spec "cypress/e2e/checkbox_spec.js"
test_scenarios:
  - Tree visibility and button controls
  - Initial collapsed state with only Home node visible
  - No checkboxes selected on load
  - Expand all nodes and verify all labels
  - Select all checkboxes and verify the result output
  - Expand individual nodes:
    - Home → Desktop, Documents, Downloads
    - Desktop → Notes, Commands
    - Documents → WorkSpace, Office
    - WorkSpace → React, Angular, Veu
    - Office → Public, Private, Classified, General
    - Downloads → Word File, Excel File
notes: |
  - All locators are centralized in the check_box_helper.js file.
  - All Cypress commands and logic are abstracted out of the spec.
  - Followed best practices for clean and readable test structure.
customization:
  - Extend to test Radio Button, Web Tables, Buttons, Links, Upload & Download, Dynamic Properties
  - Add CI support with GitHub Actions or Jenkins
contributing: |
  Pull requests and suggestions are welcome. 
  Feel free to fork and build upon this structure for more components.
