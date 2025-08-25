import * as commonHelper from '../support/common_helper.js'
import * as practiceFormHelper from '../support/practice_form_helper.js'

// Cypress.config('baseUrl')
// '/automation-practice-form'

describe('Practice Form Page', () => {
  beforeEach(() => {
    commonHelper.visitPage(Cypress.config('baseUrl'))
  })

  it('should verify that all elements exist', () => {
    practiceFormHelper.verifyElementsExist()
  })

  it('should verify placeholders and default values', () => {
    practiceFormHelper.verifyPlaceholders()
    practiceFormHelper.verifyValues()
  })

  it('should verify state and city dropdown options', () => {
    practiceFormHelper.verifyDropdownOptions()
  })

  it('should submit form successfully with all fields filled', () => {
    practiceFormHelper.runFormTestCase(0)
  })

  it('should fail submission when last name is missing', () => {
    practiceFormHelper.runFormTestCase(1)
  })

  it('should fail submission when email is invalid', () => {
    practiceFormHelper.runFormTestCase(2)
  })

  it('should fail submission when mobile number is missing', () => {
    practiceFormHelper.runFormTestCase(3)
  })

  it('should fail submission when mobile number is invalid', () => {
    practiceFormHelper.runFormTestCase(4)
  })

  it('should submit form successfully with only required fields', () => {
    practiceFormHelper.runFormTestCase(5)
  })

  it('should submit form successfully without state and city', () => {
    practiceFormHelper.runFormTestCase(6)
  })

  it('should submit form successfully with only one hobby', () => {
    practiceFormHelper.runFormTestCase(7)
  })
})
