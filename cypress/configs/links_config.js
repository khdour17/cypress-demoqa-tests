const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/links",
    specPattern: "cypress/e2e/links_spec.js",  // specific file
    browser: 'chrome',
  }
})
