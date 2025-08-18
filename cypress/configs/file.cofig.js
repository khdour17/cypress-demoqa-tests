const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/upload-download",
    specPattern: "cypress/e2e/file_spec.js",  // specific file
    browser: 'chrome',
  }
})
