import * as commonHelper from '../support/common_helper.js'

//Locaters

export const locators = {
  sidebar: '.left-pannel',
  mainMessage: '.col-12.mt-4.col-md-6',
  allGroups: '.element-group',
  firstGroupHeader: ':nth-child(3) > .group-header',
  menuItems: ':nth-child(3) > .element-list > .menu-list > li' ,
}

export const menuLabels = [
  'Browser Windows',
  'Alerts',
  'Frames',
  'Nested Frames',
  'Modal Dialogs'

]

export const menuURLs = [
  '/browser-windows',
  '/alerts',
  '/frames',
  '/nestedframes',
  '/modal-dialogs'

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
