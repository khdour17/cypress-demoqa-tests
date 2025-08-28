import * as commonHelper from '../support/common_helper.js'
import * as widgetsHelper from '../support/widgets_page_helper.js'

// '/widgets'
// Cypress.config('baseUrl')
describe('Widgets Page', () => {
  beforeEach(() => {
    commonHelper.visitPage('/widgets')
  })

    it('displays default instruction message', () => {
        widgetsHelper.verifyInstructionText()
    })

    it('displays 9 items in the Widgets group', () => {
        widgetsHelper.checkGroupItemCount()
    })

    it('displays correct names for each menu item', () => {
        widgetsHelper.verifyElementMenuLabels()
    })

    it('redirects to accordian page', () => {
        widgetsHelper.navigateToElementByIndex(0)
    })

    it('redirects to auto complete page', () => {
        widgetsHelper.navigateToElementByIndex(1)
    })

    it('redirects to date picker page', () => {
        widgetsHelper.navigateToElementByIndex(2)
    })

    it('redirects to slider page', () => {
        widgetsHelper.navigateToElementByIndex(3)
    })

    it('redirects to progress bar page', () => {
        widgetsHelper.navigateToElementByIndex(4)
    })

    it('redirects to tabs page', () => {
        widgetsHelper.navigateToElementByIndex(5)
    })

    it('redirects to tool tips page', () => {
        widgetsHelper.navigateToElementByIndex(6)
    })

    it('redirects to menu page', () => {
        widgetsHelper.navigateToElementByIndex(7)
    })

    it('redirects to select menu page', () => {
        widgetsHelper.navigateToElementByIndex(8)
    })


})
