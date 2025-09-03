import * as commonHelper from './common_helper.js'

export const locators = {
  // Tabs
  tabSimple: '#droppableExample-tab-simple',
  tabAccept: '#droppableExample-tab-accept',
  tabPrevent: '#droppableExample-tab-preventPropogation',
  tabRevert: '#droppableExample-tab-revertable',

  // Simple
  draggable: '#draggable',
  droppable: '#simpleDropContainer #droppable',

  // Accept
  acceptable: '#acceptable',
  notAcceptable: '#notAcceptable',
  acceptDroppable: '#acceptDropContainer #droppable',

  // Prevent Propagation
  dragBox: '#dragBox',
  notGreedyOuter: '#notGreedyDropBox',
  notGreedyInner: '#notGreedyInnerDropBox',
  greedyOuter: '#greedyDropBox',
  greedyInner: '#greedyDropBoxInner',

  // Revert
  revertable: '#revertable',
  notRevertable: '#notRevertable',
  revertDroppable: '#revertableDropContainer #droppable'
}

const message = [
    "Dropped!",
    "Outer droppable",
    "Drop here"
]

// --- Test scenarios ---
export const testData = [
  // Simple
  {
    tab: locators.tabSimple,
    source: locators.draggable,
    target: locators.droppable,
    shouldContain: true,
    expectedMessage: message[0]
  },
  // Acceptable
  {
    tab: locators.tabAccept,
    source: locators.acceptable,
    target: locators.acceptDroppable,
    shouldContain: true,
    expectedMessage: message[0]
  },
  // Not Acceptable
  {
    tab: locators.tabAccept,
    source: locators.notAcceptable,
    target: locators.acceptDroppable,
    shouldContain: true,
    expectedMessage: message[2]
  },
  // Prevent Propagation / Not greedy outer
  {
    tab: locators.tabPrevent,
    source: locators.dragBox,
    target: locators.notGreedyOuter,
    shouldContain: true,
    expectedMessage: message[0]
  },
  // Prevent Propagation / Not greedy inner
  {
    tab: locators.tabPrevent,
    source: locators.dragBox,
    target: locators.notGreedyInner,
    shouldContain: true,
    expectedMessage: message[0]
  },
  // Prevent Propagation / Greedy outer
  {
    tab: locators.tabPrevent,
    source: locators.dragBox,
    target: locators.greedyOuter,
    shouldContain: true,
    expectedMessage: message[1]
  },
  // Prevent Propagation / Greedy inner
  {
    tab: locators.tabPrevent,
    source: locators.dragBox,
    target: locators.greedyInner,
    shouldContain: true,
    expectedMessage: message[0]
  },
  // Revertable
  {
    tab: locators.tabRevert,
    source: locators.revertable,
    target: locators.revertDroppable,
    revert: true,
    shouldContain: true,
    expectedMessage: message[0]
  },
  // Not Revertable
  {
    tab: locators.tabRevert,
    source: locators.notRevertable,
    target: locators.revertDroppable,
    revert: false,
    shouldContain: true,
    expectedMessage: message[0]
  }
]



// --- Special handlers for revert logic ---
const verifyReverted = (source, target) => {
  cy.wait(500) // allow revert animation
  cy.get(source).then(($elAfter) => {
    const finalBox = $elAfter[0].getBoundingClientRect()
    const droppableBox = Cypress.$(target)[0].getBoundingClientRect()

    const isInside =
      finalBox.x >= droppableBox.x &&
      finalBox.x <= droppableBox.x + droppableBox.width &&
      finalBox.y >= droppableBox.y &&
      finalBox.y <= droppableBox.y + droppableBox.height

    expect(isInside).to.be.false
  })
}

const verifyNotReverted = (source, initialPosition) => {
  cy.get(source).then(($elAfter) => {
    const finalPosition = $elAfter[0].getBoundingClientRect()
    expect(finalPosition.x).not.to.equal(initialPosition.x)
    expect(finalPosition.y).not.to.equal(initialPosition.y)
  })
}

// --- Core drag & drop handler ---
export const dragAndDropAndCheck = (data) => {
  commonHelper.clickOnElement(data.tab)

  cy.get(data.source).then(($el) => {
    const initialPosition = $el[0].getBoundingClientRect()

    // Perform drag & drop
    cy.wrap($el).trigger("mousedown", { which: 1 })
    cy.get(data.target).trigger("mousemove").trigger("mouseup", { force: true })

    // Verify target text
    if (data.shouldContain) {
      commonHelper.elementContains(data.target,data.expectedMessage)
    } else {
      commonHelper.elementContains(data.target,data.expectedMessage,false)
    }

    // Special handling for revert cases
    if (data.tab === locators.tabRevert) {
      if (data.revert) {
        verifyReverted(data.source, data.target)
      } else {
        verifyNotReverted(data.source, initialPosition)
      }
    }
  })
}


