import * as commonHelper from './common_helper'

const baseNodePath = '#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(1) '

export const locaters = {
  allExpandCollapseBtns: '.rct-options button',
  expandAllBtn: '.rct-option-expand-all',
  collapseAllBtn: '.rct-option-collapse-all',
  checkboxIcons: '.rct-checkbox',
  checkedIcons: '.rct-icon-check',
  labelTitles: '.rct-title',
  node: '.rct-node',
  treeRoot: '#tree-node',
  resultContainer: '#result',
  toggleButton: 'button',
  nodeHome: `${baseNodePath}`,
  nodeHomeLabel: `${baseNodePath} > label`,
}

export const expectedTreeItems = [
  'Home', 'Desktop', 'Notes', 'Commands', 'Documents', 'WorkSpace',
  'React', 'Angular', 'Veu', 'Office', 'Public', 'Private',
  'Classified', 'General', 'Downloads', 'Word File.doc', 'Excel File.doc'
]

export const childrenMap = {
  'Home': ['Desktop', 'Documents', 'Downloads'],
  'Desktop': ['Notes', 'Commands'],
  'Documents': ['WorkSpace', 'Office'],
  'WorkSpace': ['React', 'Angular', 'Veu'],
  'Office': ['Public', 'Private', 'Classified', 'General'],
  'Downloads': ['Word File.doc', 'Excel File.doc']
}


// === General checks ===
export const verifyAllElementsExist = () => {
  commonHelper.verifyElementExistence(locaters.treeRoot,true)
  commonHelper.verifyElementExistence(locaters.expandAllBtn,true)
  commonHelper.verifyElementExistence(locaters.collapseAllBtn,true)
  commonHelper.elementItemsLength(locaters.allExpandCollapseBtns,2)
}

export const verifyRootOnlyVisible = () => {
  commonHelper.elementItemsLength(locaters.labelTitles,1)
  commonHelper.elementContains(locaters.nodeHome,"Home")
}

export const verifyNoneChecked = () => {
  commonHelper.clickOnElement(locaters.expandAllBtn)
  commonHelper.verifyElementExistence(locaters.checkedIcons,false)
}

export const expandAllAndVerifyTreeLabels = () => {
  commonHelper.clickOnElement(locaters.expandAllBtn)
  commonHelper.iterateOnElements(locaters.labelTitles, ($el, index) => {
    cy.wrap($el).should('have.text', expectedTreeItems[index])
  })
  commonHelper.elementItemsLength(locaters.labelTitles,expectedTreeItems.length)
}

// === Selection checks ===
export const checkAllTreeCheckboxes = () => {
  commonHelper.clickOnElement(locaters.expandAllBtn)
  commonHelper.clickOnElement(locaters.nodeHomeLabel)
  commonHelper.iterateOnElements(locaters.checkboxIcons, ($el) => {
    cy.wrap($el).find(locaters.checkedIcons).should('exist')
  })
}

export const uncheckAllTreeCheckboxes = () => {
  commonHelper.clickOnElement(locaters.nodeHomeLabel)
  commonHelper.verifyElementExistence(locaters.checkedIcons,false)
}

export const verifySelectingAllOutput = (cleanForOutput = true) => {
  commonHelper.verifyElementExistence(locaters.resultContainer,true)

  expectedTreeItems.forEach((item) => {
    const transformedItem = cleanForOutput
      ? item === 'Word File.doc'
        ? 'Wordfile'
        : item === 'Excel File.doc'
        ? 'Excelfile'
        : item
      : item

    cy.get(locaters.resultContainer)
      .find('span')
      .contains(transformedItem, { matchCase: false })
      .should('exist')
  })
}


// === Child expand/verify helpers ===

export const expandAndVerify = (nodeName, expectedChildren) => {
  cy.contains(locaters.labelTitles, nodeName)
    .parents(locaters.node)
    .first()
    .as('currentNode')

  cy.get('@currentNode').then($node => {
    if (!$node.hasClass('rct-node-expanded')) {
      cy.wrap($node).find(locaters.toggleButton).first().click()
    }
  })

  // Re-select node after expansion (DOM updated)
  cy.contains(locaters.labelTitles, nodeName)
    .parents(locaters.node)
    .first()
    .as('currentNode')

  cy.get('@currentNode').within(() => {
    expectedChildren.forEach(child => {
      cy.contains(locaters.labelTitles, child).should('be.visible')
    })
  })
}

// Recursive function to expand whole tree
export const expandTreeRecursively = (nodeName, childrenMap) => {
  expandAndVerify(nodeName, childrenMap[nodeName] || [])

  if (childrenMap[nodeName]) {
    childrenMap[nodeName].forEach(child => {
      if (childrenMap[child]) {
        expandTreeRecursively(child, childrenMap)
      }
    })
  }
}