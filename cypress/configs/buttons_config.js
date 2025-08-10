const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/buttons",
    specPattern: "cypress/e2e/buttons_spec.js",  // specific file
    browser: 'chrome',
  }
})
