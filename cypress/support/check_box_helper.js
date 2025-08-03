import * as commonHelper from './common_helper';

const baseNodePath = '#tree-node > :nth-child(2) > :nth-child(1)';

export const locaters = {
  allExpandCollapseBtns: '.rct-options button',
  expandAllBtn: '.rct-option-expand-all',
  collapseAllBtn: '.rct-option-collapse-all',
  checkboxIcons: '.rct-checkbox',
  checkedIcons: '.rct-icon-check',
  labelTitles: '.rct-title',
  treeRoot: '#tree-node',
  resultContainer: '#result',
  nodeTitles: '.rct-title',
  toggleButton: 'button',

  nodeHome: `${baseNodePath} > :nth-child(1) `,
  homeChildren: `${baseNodePath} > :nth-child(2) > li`,
  nodeDesktop: `${baseNodePath} > :nth-child(2) > :nth-child(1)`,
  desktopChildren: ':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > li',
  nodeDocuments: `${baseNodePath} > :nth-child(2) > :nth-child(2) > :nth-child(1)`,
  documentsChildren: ':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > li',
  nodeWorkSpace: `:nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) `,
  workSpaceChildren: ':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > li',
  nodeOffice: `:nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) `,
  officeChildren: ':nth-child(2) > :nth-child(2) > :nth-child(2) > ol > li',
  nodeDownloads: `${baseNodePath} > :nth-child(2) > :nth-child(3) > :nth-child(1)`,
  downloadsChildren: ':nth-child(3) > ol > li',
};

export const expectedTreeItems = [
  'Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace',
  'React', 'Angular', 'Veu', 'Office', 'Public', 'Private',
  'Classified', 'General', 'Downloads', 'Word File.doc', 'Excel File.doc'
];

export const expectedOutputItems = [
  'Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace',
  'React', 'Angular', 'Veu', 'Office', 'Public', 'Private',
  'Classified', 'General', 'Downloads', 'Wordfile', 'Excelfile'
];

// === General checks ===
export const verifyTreeContainerAndButtonsExist = () => {
  cy.get(locaters.treeRoot).should('exist');
  cy.get(locaters.expandAllBtn).should('exist');
  cy.get(locaters.collapseAllBtn).should('exist');
  cy.get(locaters.allExpandCollapseBtns).should('have.length', 2);
};

export const verifyOnlyRootNodeIsVisibleInitially = () => {
  cy.get(locaters.labelTitles).should('have.length', 1);
  cy.get(locaters.labelTitles).first().should('have.text', 'Home');
};

export const verifyNoCheckboxIsCheckedInitially = () => {
  cy.get(locaters.expandAllBtn).click(); // make sure all checkboxes are visible
  cy.get(locaters.checkedIcons).should('not.exist');
};

export const expandAllAndVerifyTreeLabels = () => {
  cy.get(locaters.expandAllBtn).click();
  commonHelper.iterateOnElements(locaters.labelTitles, ($el, index) => {
    cy.wrap($el).should('have.text', expectedTreeItems[index]);
  });
  cy.get(locaters.labelTitles).should('have.length', expectedTreeItems.length);
};

// === Selection checks ===
export const checkAllTreeCheckboxes = () => {
  cy.get(locaters.expandAllBtn).click();
  cy.get(locaters.nodeHome).find('label').click();
  commonHelper.iterateOnElements(locaters.checkboxIcons, ($el) => {
    cy.wrap($el).find(locaters.checkedIcons).should('exist');
  });
};

export const uncheckAllTreeCheckboxes = () => {
  cy.get(locaters.nodeHome).find('label').click();
  cy.get(locaters.checkedIcons).should('not.exist');
};

export const verifyResultOutputAfterSelectingAll = () => {
  cy.get(locaters.resultContainer).should('exist');
  expectedOutputItems.forEach((item) => {
    cy.get(locaters.resultContainer)
      .find('span')
      .contains(item, { matchCase: false })
      .should('exist');
  });
};

// === Child expand/verify helpers ===
export const verifyHomeChildren = () => {
  cy.get(locaters.nodeHome).find(locaters.toggleButton).click();
  const children = ['Desktop', 'Documents', 'Downloads'];
  cy.get(locaters.homeChildren).should('have.length', children.length);
  children.forEach(label => {
    cy.get(locaters.homeChildren).contains(label).should('exist');
  });
};

export const verifyDesktopChildren = () => {
  verifyHomeChildren();
  cy.get(locaters.nodeDesktop).find(locaters.toggleButton).click();
  const children = ['Notes', 'Commands'];
  cy.get(locaters.desktopChildren).should('have.length', children.length);
  children.forEach(label => {
    cy.get(locaters.desktopChildren).contains(label).should('exist');
  });
};

export const verifyDocumentsChildren = () => {
  verifyHomeChildren();
  cy.get(locaters.nodeDocuments).find(locaters.toggleButton).click();
  const children = ['WorkSpace', 'Office'];
  cy.get(locaters.documentsChildren).should('have.length', children.length);
  children.forEach(label => {
    cy.get(locaters.documentsChildren).contains(label).should('exist');
  });
};

export const verifyWorkSpaceChildren = () => {
  verifyDocumentsChildren();
  cy.get(locaters.nodeWorkSpace).find(locaters.toggleButton).click();
  const children = ['React', 'Angular', 'Veu'];
  cy.get(locaters.workSpaceChildren).should('have.length', children.length);
  children.forEach(label => {
    cy.get(locaters.workSpaceChildren).contains(label).should('exist');
  });
};

export const verifyOfficeChildren = () => {
  verifyDocumentsChildren();
  cy.get(locaters.nodeOffice).find(locaters.toggleButton).click();
  const children = ['Public', 'Private', 'Classified', 'General'];
  cy.get(locaters.officeChildren).should('have.length', children.length);
  children.forEach(label => {
    cy.get(locaters.officeChildren).contains(label).should('exist');
  });
};

export const verifyDownloadsChildren = () => {
  verifyHomeChildren();
  cy.get(locaters.nodeDownloads).find(locaters.toggleButton).click();
  const children = ['Word File', 'Excel File'];
  cy.get(locaters.downloadsChildren).should('have.length', children.length);
  children.forEach(label => {
    cy.get(locaters.downloadsChildren).contains(label).should('exist');
  });
};
