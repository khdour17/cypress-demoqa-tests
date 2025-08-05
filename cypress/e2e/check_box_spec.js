import * as commonHelper from '../support/common_helper.js'
import * as checkBoxHelper from '../support/check_box_helper.js'

describe('Check Box Component', () => {
  beforeEach(() => {
    commonHelper.visitPage('/checkbox')
  })

  it('displays the tree and expand/collapse controls', () => {
    checkBoxHelper.verifyAllElementsExist()
  })

  it('shows only Home node initially', () => {
    checkBoxHelper.verifyRootOnlyVisible()
  })

  it('no checkboxes should be selected on page load', () => {
    checkBoxHelper.verifyNoneChecked()
  })

  it('expands all nodes and displays correct tree item labels', () => {
    checkBoxHelper.expandAllAndVerifyTreeLabels()
  })

  it('expands recursivly and checks the tree', () => {
    checkBoxHelper.expandTreeRecursively('Home', checkBoxHelper.childrenMap)
  })   

  it('selects all checkboxes and validates result output', () => {
    checkBoxHelper.checkAllTreeCheckboxes()
    checkBoxHelper.verifySelectingAllOutput()
  })

  it('unselects all checkboxes and verifies none are selected', () => {
    checkBoxHelper.checkAllTreeCheckboxes()
    checkBoxHelper.uncheckAllTreeCheckboxes()
  })
                
})
