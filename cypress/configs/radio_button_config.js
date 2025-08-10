const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/radio-button",
    specPattern: "cypress/e2e/radio_button_spec.js",  // specific file
    browser: 'chrome',
  }
})
