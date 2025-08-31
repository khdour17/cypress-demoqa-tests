import * as commonHelper from '../support/common_helper.js'
import * as accordianHelper from '../support/accordian_helper.js'

// '/accordian'
// Cypress.config('baseUrl')

describe('Accordian Page Tests', () => {
  beforeEach(() => {
    commonHelper.visitPage('/accordian')
  })

  it('Verify all accordion elements exist', () => {
    accordianHelper.verifyAllElementsExist()
  })

  it('Verify default accordion state', () => {
    accordianHelper.verifyDefaultState()
  })

  it('Expand Section 1 and verify text', () => {
    accordianHelper.expandAndVerifySection(accordianHelper.testData[0])
  })

  it('Expand Section 2 and verify text', () => {
    accordianHelper.expandAndVerifySection(accordianHelper.testData[1])
  })

  it('Expand Section 3 and verify text', () => {
    accordianHelper.expandAndVerifySection(accordianHelper.testData[2])
  })

  it('Verify only one accordion section is open at a time', () => {
    accordianHelper.verifySingleExpandBehavior()
  })
})
