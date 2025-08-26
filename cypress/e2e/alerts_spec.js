import * as commonHelper from '../support/common_helper.js'
import * as alertsHelper from '../support/alerts_helper.js'


// Cypress.config('baseUrl')
// '/alerts'

describe('Alerts Page Tests', () => {
    beforeEach(() => {
        commonHelper.visitPage('/alerts')
    })

    it('verify all elements exist',()=>{
        alertsHelper.verifyElementExist()
    })
    
    it('checks immediate alert', () => {
        alertsHelper.verifyImmediateAlert()
    })

    it('checks timer alert', () => {
        alertsHelper.verifyTimerAlert()
    })

    it('checks confirm alert - OK', () => {
        alertsHelper.verifyConfirmAlert(alertsHelper.data[2].action)
    })

    it('checks confirm alert - Cancel', () => {
        alertsHelper.verifyConfirmAlert(alertsHelper.data[3].action)
    })

    it('checks prompt alert', () => {
        alertsHelper.verifyPromptAlert(alertsHelper.data[4].inputValue)
    })
})
