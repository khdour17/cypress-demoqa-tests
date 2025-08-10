const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/text-box",
    specPattern: "cypress/e2e/text_box_spec.js",  // specific file
    browser: 'chrome',
  }
})
