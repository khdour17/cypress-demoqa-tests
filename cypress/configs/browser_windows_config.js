const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/browser-windows",
    specPattern: "cypress/e2e/browser_windows_spec.js",  // specific file
    browser: 'chrome',
  }
})
