import * as commonHelper from '../support/common_helper.js';

//Locaters
const firstGroup = ':nth-child(1) > .element-list > .menu-list';

export const locators = {
  sidebar: '.left-pannel',
  mainMessage: '.col-12.mt-4.col-md-6',
  allGroups: '.element-group',
  firstGroupHeader: ':nth-child(1) > .group-header',

  menuList: firstGroup,
  menuItems: `${firstGroup} > li`,

  textBox: `${firstGroup} > #item-0`,
  checkBox: `${firstGroup} > #item-1`,
  radioButton: `${firstGroup} > #item-2`,
  webTables: `${firstGroup} > #item-3`,
  buttons: `${firstGroup} > #item-4`,
  links: `${firstGroup} > #item-5`,
  brokenLinks: `${firstGroup} > #item-6`,
  uploadDownload: `${firstGroup} > #item-7`,
  dynamicProperties: `${firstGroup} > #item-8`,
};

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
];

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
];

// ─── Verifications ───────────────────────────────

export const verifyInstructionText = () => {
  cy.get(locators.mainMessage).should('contain.text', 'Please select an item from left to start practice.');
};

export const verifySidebarGroupCount = () => {
  cy.get(locators.allGroups).should('have.length', 6);
};

export const verifyElementsGroupItemCount = () => {
  cy.get(locators.menuItems).should('have.length', menuLabels.length);
};

export const verifyElementMenuLabels = () => {
  commonHelper.iterateOnElements(locators.menuItems, ($el, index) => {
    cy.wrap($el).should('contain.text', menuLabels[index]);
  });
};

// ─── Navigation ──────────────────────────────────

export const navigateToElementByIndex = (index) => {
  cy.get(locators.menuItems).eq(index).click();
  cy.location('pathname').should('equal', menuURLs[index]);
  cy.get(locators.mainMessage).should('contain.text', menuLabels[index]);
};
