const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/webtables",
    specPattern: "cypress/e2e/web_table_spec.js",  // specific file
    browser: 'chrome',
  }
})
