import * as commonHelper from '../support/common_helper.js'

//Locaters

export const locators = {
  sidebar: '.left-pannel',
  mainMessage: '.col-12.mt-4.col-md-6',
  allGroups: '.element-group',
  firstGroupHeader: ':nth-child(1) > .group-header',
  menuItems: ':nth-child(1) > .element-list > .menu-list > li' ,

}

export const menuLabels = [
  'Text Box',
  'Check Box',
  'Radio Button',
  'Web Tables',
  'Buttons',
  'Links',
  'Broken Links - Images',
  'Upload and Download',
  'Dynamic Properties',
]

export const menuURLs = [
  '/text-box',
  '/checkbox',
  '/radio-button',
  '/webtables',
  '/buttons',
  '/links',
  '/broken',
  '/upload-download',
  '/dynamic-properties',
]

const message = 'Please select an item from left to start practice.'

// ─── Verifications ───────────────────────────────

export const verifyInstructionText = () => {
  commonHelper.elementContains(locators.mainMessage,message)
}

export const verifySidebarGroupCount = () => {
  commonHelper.elementItemsLength(locators.allGroups,6)
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
