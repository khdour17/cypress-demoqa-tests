const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/alertsWindows",
    specPattern: "cypress/e2e/alerts_windows_spec.js",  // specific file
    browser: 'chrome',
  }
})
