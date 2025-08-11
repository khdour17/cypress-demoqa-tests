import * as commonHelper from '../support/common_helper.js'
import * as linksHelper from '../support/links_helper'
//Cypress.config('baseUrl')
describe('Links Page Tests', () => {

  beforeEach(() => {
    commonHelper.visitPage('/links')
  })

  it('Verify all links exist initially', () => {
    linksHelper.verifyInitialLinks()
  })

  it('Click simple external link', () => {
    linksHelper.clickExternalLink(linksHelper.locators.simpleLink)
  })

  it('Click dynamic external link',()=>{
    linksHelper.clickExternalLink(linksHelper.locators.dynamicLink)
  })

  it('Verify API link responses', () => {
     linksHelper.apiLinksData.forEach(link => {
      linksHelper.clickApiLinkAndVerify(
        link.locator,
        link.endpoint,
        link.status,
        link.message
      )
    })
  })

})


