import * as commonHelper from '../support/common_helper.js'
import * as modalDialogsHelper from '../support/modal_dialogs_helper.js'


// Cypress.config('baseUrl')
// '/modal-dialogs'

describe('modal dialogs Page Tests', () => {
    beforeEach(() => {
        commonHelper.visitPage('/modal-dialogs')
    })

    it('Verify buttons exist', () => {
        modalDialogsHelper.verifyAllElementsExist()
    })

    it('Verify small modal opens and closes', () => {
        modalDialogsHelper.verifySmallModal()
    })

    it('Verify large modal opens and closes', () => {
        modalDialogsHelper.verifyLargeModal()
    })

    it('Verify only one modal can be open at a time', () => {
        modalDialogsHelper.verifyOnlyOneModalOpen()
    })

})




