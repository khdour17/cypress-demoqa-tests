import * as commonHelper from '../support/common_helper.js'
import * as interactionHelper from '../support/interaction_page_helper.js'

// '/interaction'
// Cypress.config('baseUrl')
describe('Interactions Page', () => {
  beforeEach(() => {
    commonHelper.visitPage('/interaction')
  })

    it('displays default instruction message', () => {
        interactionHelper.verifyInstructionText()
    })

    it('displays 5 items in the interaction group', () => {
        interactionHelper.checkGroupItemCount()
    })

    it('displays correct names for each menu item', () => {
        interactionHelper.verifyElementMenuLabels()
    })
  'Dragabble'
    it('redirects to Sortable page', () => {
        interactionHelper.navigateToElementByIndex(0)
    })

    it('redirects to Selectable page', () => {
        interactionHelper.navigateToElementByIndex(1)
    })

    it('redirects to Resizable page', () => {
        interactionHelper.navigateToElementByIndex(2)
    })

    it('redirects to Droppable page', () => {
        interactionHelper.navigateToElementByIndex(3)
    })

    it('redirects to Dragabble page', () => {
        interactionHelper.navigateToElementByIndex(4)
    })

})
