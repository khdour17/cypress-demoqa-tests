import * as commonHelper from '../support/common_helper.js'
import * as formsHelper from '../support/forms_helper.js'

// '/forms'
// Cypress.config('baseUrl')
describe('Forms Page', () => {
  beforeEach(() => {
    commonHelper.visitPage('/forms')
  })

  it('displays default instruction message', () => {
    formsHelper.verifyInstructionText()
  })

  it('displays 1 items in the Elements group', () => {
    formsHelper.verifyElementsGroupItemCount()
  })

  it('displays correct names for each menu item', () => {
    formsHelper.verifyElementMenuLabels()
  })

  it('redirects to practice form page', () => {
    formsHelper.navigateToElementByIndex(0)
  })

})
