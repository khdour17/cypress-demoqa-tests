import * as commonHelper from '../support/common_helper.js'
import * as windowsHelper from '../support/alerts_windows_helper.js'

// '/alertsWindows'
// Cypress.config('baseUrl')

describe('Alerts, Frames, Windows Page', () => {
  beforeEach(() => {
    commonHelper.visitPage('/alertsWindows')
  })

  it('displays default instruction message', () => {
    windowsHelper.verifyInstructionText()
  })

  it('displays 5 items in the Elements group', () => {
    windowsHelper.verifyElementsGroupItemCount()
  })

  it('displays correct names for each menu item', () => {
    windowsHelper.verifyElementMenuLabels()
  })

  it('redirects to Browser Windows page', () => {
    windowsHelper.navigateToElementByIndex(0)
  })
  it('redirects to Alerts page', () => {
    windowsHelper.navigateToElementByIndex(1)
  })
  it('redirects to Frames page', () => {
    windowsHelper.navigateToElementByIndex(2)
  })
  it('redirects to Nested Frames page', () => {
    windowsHelper.navigateToElementByIndex(3)
  })
  it('redirects to Modal Dialogs page', () => {
    windowsHelper.navigateToElementByIndex(4)
  })

})
