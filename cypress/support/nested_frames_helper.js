import * as commonHelper from '../support/common_helper.js'

export const locators = {
  body: 'body',
  parentFrame: "#frame1",   // the outer iframe
  childFrame: "iframe",     // iframe inside the parent
}

const expectedText = [
  'Sample Nested Iframe page. There are nested iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame and the nested child frame.',  
  'Parent frame',
  'Child Iframe',
]


export const verifyAllElementsExist = () => {
  commonHelper.elementContains(locators.body,expectedText[0])
  commonHelper.verifyElementExistence(locators.parentFrame, true)
  commonHelper.verifyElementExistence(locators.childFrame, true)
}

export const verifyNestedFramesText = () => {
  // Access Parent Frame
  cy.get(locators.parentFrame)
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap)
    .within(() => {
      cy.contains(expectedText[1]).should("exist")

      // Access Child Frame inside Parent
      cy.get(locators.childFrame)
        .its("0.contentDocument.body")
        .should("not.be.empty")
        .then(cy.wrap)
        .within(() => {
          cy.contains(expectedText[2]).should("exist")
        })
    })
}


export const verifyChildInsideParent = () => {
  cy.get(locators.parentFrame)
    .its("0.contentDocument.body")
    .then(cy.wrap)
    .find(locators.childFrame)
    .should("exist")
}