const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/interaction",
    specPattern: "cypress/e2e/interaction_page_spec.js",  // specific file
    browser: 'chrome',
  }
})
