const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/forms",
    specPattern: "cypress/e2e/forms_spec.js",  // specific file
    browser: 'chrome',
  }
})
