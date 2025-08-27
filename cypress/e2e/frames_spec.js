import * as commonHelper from '../support/common_helper.js'
import * as framesHelper from '../support/frames_helper.js'


// Cypress.config('baseUrl')
// '/frames'

describe('Frames Page Tests', () => {
    beforeEach(() => {
        commonHelper.visitPage('/frames')
    })

    it("Verify all elements exist", () => {
        framesHelper.verifyAllElementsExist()
    })

    it("Verify Frame 1 text", () => {
        framesHelper.verifyFrame(framesHelper.locators.frame1)
    })

    it("Verify Frame 2 text", () => {
        framesHelper.verifyFrame(framesHelper.locators.frame2)
    })
    
})




