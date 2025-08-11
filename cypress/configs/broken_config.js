const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/broken",
    specPattern: "cypress/e2e/broken_spec.js",  // specific file
    browser: 'chrome',
  }
})
