import * as commonHelper from './common_helper'

export const locators = {
  validImage: "img[src='/images/Toolsqa.jpg']",
  brokenImage: "img[src='/images/Toolsqa_1.jpg']",
  validLink: "a[href='http://demoqa.com']",
  brokenLink: "a[href='http://the-internet.herokuapp.com/status_codes/500']"
}

export const testData = {
  images: [
    { locator: locators.validImage, shouldBeValid: true },
    { locator: locators.brokenImage, shouldBeValid: false }
  ],
  links: [
    { locator: locators.validLink, expectedStatus: 200 },
    { locator: locators.brokenLink, expectedStatus: 500 }
  ]
}

export const verifyElementExists = () => {
  commonHelper.verifyElementExistence(locators.validImage, true)
  commonHelper.verifyElementExistence(locators.brokenImage, true)
  commonHelper.verifyElementExistence(locators.validLink, true)
  commonHelper.verifyElementExistence(locators.brokenImage, true)
}

export const verifyImageStatus = (locator, shouldBeValid) => {
  if (shouldBeValid) {
    cy.get(locator)
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .and('be.gt', 0)
  } else {
    cy.get(locator)
      .should('have.prop', 'naturalWidth', 0)
  }
}


export const verifyLinkStatus = (locator, expectedStatus) => {
  cy.get(locator)
    .should('be.visible')
    .then($el => { 
      cy.request({
        url: $el.prop('href'),
        failOnStatusCode: false
      }).its('status').should('eq', expectedStatus)
    })
}
