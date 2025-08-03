const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    specPattern: 'cypress/e2e/**/*.js',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
