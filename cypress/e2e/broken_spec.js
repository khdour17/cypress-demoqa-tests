import * as commonHelper from '../support/common_helper.js'
import * as brokenHelper from '../support/broken_helper.js'

// Cypress.config('baseUrl')
// '/broken'

describe('Broken Links - Images Page', () => {
  beforeEach(() => {
    commonHelper.visitPage('/broken')
  })

  it('Verify UI elements exist', () => {
    brokenHelper.verifyElementExists()
  })

  it('Verify all images', () => {
    brokenHelper.testData.images.forEach(img => {
      brokenHelper.verifyImageStatus(img.locator, img.shouldBeValid)
    })
  })

  it('Verify all links status codes', () => {
    brokenHelper.testData.links.forEach(link => {
      brokenHelper.verifyLinkStatus(link.locator, link.expectedStatus)
    })
  })

})
