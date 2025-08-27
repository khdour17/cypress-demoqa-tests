const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/nestedframes",
    specPattern: "cypress/e2e/nested_frames_spec.js",  // specific file
    browser: 'chrome',
  }
})
