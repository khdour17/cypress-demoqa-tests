const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/slider",
    specPattern: "cypress/e2e/slider_spec.js",  // specific file
    browser: 'chrome',
  }
})
