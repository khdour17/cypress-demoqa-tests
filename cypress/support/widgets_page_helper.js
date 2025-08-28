import * as commonHelper from '../support/common_helper.js'

//Locaters

export const locators = {
  sidebar: '.left-pannel',
  mainMessage: '.col-12.mt-4.col-md-6',
  allGroups: '.element-group',
  firstGroupHeader: ':nth-child(4) > .group-header',
  menuItems: ':nth-child(4) > .element-list > .menu-list > li' ,

}

export const menuLabels = [
  'Accordian',
  'Auto Complete',
  'Date Picker',
  'Slider',
  'Progress Bar',
  'Tabs',
  'Tool Tips',
  'Menu',
  'Select Menu'
]

export const menuURLs = [
  '/accordian',
  '/auto-complete',
  '/date-picker',
  '/slider',
  '/progress-bar',
  '/tabs',
  '/tool-tips',
  '/menu',
  '/select-menu'
]


const message = 'Please select an item from left to start practice.'

// ─── Verifications ───────────────────────────────

export const verifyInstructionText = () => {
  commonHelper.elementContains(locators.mainMessage, message)
}


export const checkGroupItemCount = () => {
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
