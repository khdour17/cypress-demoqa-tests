import * as commonHelper from '../support/common_helper.js'

export const locators = {
    tabButton: '#tabButton',
    windowButton: '#windowButton',
    messageWindowButton: '#messageWindowButton',
    sampleHeading: '#sampleHeading'
}

export const verifyAllElementsExist =()=> {
    commonHelper.verifyElementExistence(locators.tabButton,true)
    commonHelper.verifyElementExistence(locators.windowButton,true)
    commonHelper.verifyElementExistence(locators.messageWindowButton,true)
}

const messages = [
    'This is a sample page',
    'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.'
]


export function clickNewTabAndVerify() {
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url
    })
  })
  cy.get(locators.tabButton).click()
  cy.get(locators.sampleHeading).should('have.text', messages[0])
}

export function clickNewWindowAndVerify() {
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url
    })
  })
  cy.get(locators.windowButton).click()
  cy.get(locators.sampleHeading).should('have.text', messages[0])
}

export function clickMessageWindowAndVerify() {
    cy.window().then((win) => {
        cy.stub(win, 'open').callsFake(() => {
            return { 
                document: { 
                    write: cy.stub().as('docWrite') 
                } 
            }
            }).as('newMessageWindow')
        })
    commonHelper.clickOnElement(locators.messageWindowButton)
    cy.get('@newMessageWindow').should('be.called')
    cy.get('@docWrite').should('be.calledWith',messages[1])  // verify document.write was called
}
