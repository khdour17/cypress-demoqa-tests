const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/widgets",
    specPattern: "cypress/e2e/widgets_page_spec.js",  // specific file
    browser: 'chrome',
  }
})
