import * as commonHelper from '../support/common_helper.js'
import * as droppableHelper from '../support/droppable_helper.js'

describe('Droppable Page Tests', () => {
  beforeEach(() => {
    commonHelper.visitPage('/droppable')
  })

  // --- Simple tab ---
  it('Simple drag and drop', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[0])
  })

  // --- Accept tab ---
  it('Acceptable element should be dropped', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[1])
  })

  it('Not acceptable element should not be dropped', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[2])
  })

  // --- Prevent Propagation tab ---
  it('Drop into Not Greedy Inner', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[3])
  })

  it('Drop into Not Greedy Outer', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[4])
  })

  it('Drop into Greedy Inner', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[5])
  })

  it('Greedy Outer should not change', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[6])
  })

  // --- Revert tab ---
  it('Revertable element should return to original position', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[7])
  })

  it('Not Revertable element should stay in drop zone', () => {
    droppableHelper.dragAndDropAndCheck(droppableHelper.testData[8])
  })
})
