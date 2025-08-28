const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/modal-dialogs",
    specPattern: "cypress/e2e/modal_dialogs_spec.js",  // specific file
    browser: 'chrome',
  }
})