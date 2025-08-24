const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/automation-practice-form",
    specPattern: "cypress/e2e/practice_form_spec.js",  // specific file
    browser: 'chrome',
  }
})
