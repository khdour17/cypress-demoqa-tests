import * as commonHelper from '../support/common_helper.js'

export const locators = {
  body: 'body',
  frame1: '#frame1',
  frame2: '#frame2',
  frameHeading: '#sampleHeading' // inside each iframe
}

const expectedText = [
  'Sample Iframe page There are 2 Iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame, which is this window, and the two frames below',
  'This is a sample page'
]


export const verifyAllElementsExist = () => {
  commonHelper.elementContains(locators.body,expectedText[0])
  commonHelper.verifyElementExistence(locators.frame1, true)
  commonHelper.verifyElementExistence(locators.frame2, true)
}

export const verifyFrame = (locator)=> {
    cy.get(locator)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .find(locators.frameHeading)
      .should('have.text', expectedText[1])
}
