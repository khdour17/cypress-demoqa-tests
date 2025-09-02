const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/progress-bar",
    specPattern: "cypress/e2e/progress_bar_spec.js",  // specific file
    browser: 'chrome',
  }
})
