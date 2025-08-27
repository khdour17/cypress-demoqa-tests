import * as commonHelper from '../support/common_helper.js'
import * as nestedFramesHelper from '../support/nested_frames_helper.js'


// Cypress.config('baseUrl')
// '/nestedframes'

describe('Frames Page Tests', () => {
    beforeEach(() => {
        commonHelper.visitPage('/nestedframes')
    })

    it('Verify all elements exist on the Nested Frames page', () => {
        nestedFramesHelper.verifyAllElementsExist()
    })

    it('Verify text inside Parent and Child frames', () => {
        nestedFramesHelper.verifyNestedFramesText()
    })

    it('Verify Child frame is inside Parent frame', () => {
        nestedFramesHelper.verifyChildInsideParent()
    })

    
    
})




