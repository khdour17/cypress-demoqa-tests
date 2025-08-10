const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/elements",
    specPattern: "cypress/e2e/elements_page_spec.js",  // specific file
    browser: 'chrome',
  }
})
