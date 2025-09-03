const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/droppable",
    specPattern: "cypress/e2e/droppable_spec.js",  // specific file
    browser: 'chrome',
  }
})
