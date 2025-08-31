const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/accordian",
    specPattern: "cypress/e2e/accordian_spec.js",  // specific file
    browser: 'chrome',
  }
})
