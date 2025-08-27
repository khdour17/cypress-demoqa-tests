const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/frames",
    specPattern: "cypress/e2e/frames_spec.js",  // specific file
    browser: 'chrome',
  }
})
