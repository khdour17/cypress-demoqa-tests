import * as commonHelper from '../support/common_helper.js';
import * as radioHelper from '../support/radio_button_helper.js';

describe('Radio butto tests:', ()=>{
    beforeEach('visit the page:',()=>{
        commonHelper.visitPage(Cypress.config('baseUrl'))
    })

    it('check elements exist',()=>{
        radioHelper.elementsExist()
    })

     it('should allow clicking Yes radio button', () => {
        radioHelper.clickRadioAndcheckOutput(radioHelper.locaters.yesRadio,0);
    });

    it('should allow clicking Impressive radio button', () => {
        radioHelper.clickRadioAndcheckOutput(radioHelper.locaters.impressiveRadio, 1);
    });
})