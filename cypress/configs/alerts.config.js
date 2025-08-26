const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/alerts",
    specPattern: "cypress/e2e/alerts_spec.js",  // specific file
    browser: 'chrome',
  }
})
