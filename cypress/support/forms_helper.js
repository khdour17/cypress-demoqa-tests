import * as commonHelper from '../support/common_helper.js'

//Locaters

export const locators = {
  sidebar: '.left-pannel',
  mainMessage: '.col-12.mt-4.col-md-6',
  allGroups: '.element-group',
  firstGroupHeader: ':nth-child(2) > .group-header',
  menuItems: ':nth-child(2) > .element-list > .menu-list > li' ,

}

export const menuLabels = [
  'Practice Form'
]

export const menuURLs = [
  '/automation-practice-form'
]

const message = 'Please select an item from left to start practice.'

// ─── Verifications ───────────────────────────────

export const verifyInstructionText = () => {
  commonHelper.elementContains(locators.mainMessage, message)
}


export const verifyElementsGroupItemCount = () => {
  commonHelper.elementItemsLength(locators.menuItems,menuLabels.length)
}

export const verifyElementMenuLabels = () => {
  commonHelper.iterateOnElements(locators.menuItems, ($el, index) => {
    cy.wrap($el).should('contain.text', menuLabels[index])
  })
}

// ─── Navigation ──────────────────────────────────

export const navigateToElementByIndex = (index) => {
  cy.get(locators.menuItems).eq(index).click()
  cy.location('pathname').should('equal', menuURLs[index])
  commonHelper.elementContains(locators.mainMessage,menuLabels[index])
}
