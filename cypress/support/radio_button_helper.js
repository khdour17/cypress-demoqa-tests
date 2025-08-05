import * as commonHelper from './common_helper';

export const locaters = {
    questionText: '.mb-3',
    radioBtns: '.custom-radio',
    yesRadio: '#yesRadio',
    impressiveRadio: '#impressiveRadio',
    noRadio: '#noRadio',
    yesLabel: 'label[for="yesRadio"]',
    impressiveLabel: 'label[for="impressiveRadio"]',
    noLabel: 'label[for="noRadio"]',
    output: '.mt-3'
}

export const elementsExist = () =>{
    commonHelper.verifyElementExistence(locaters.questionText,true).contains('Do you like the site?')
    commonHelper.verifyElementExistence(locaters.yesRadio,true)
    commonHelper.verifyElementExistence(locaters.noRadio,true)
    commonHelper.verifyElementExistence(locaters.impressiveRadio,true)
    commonHelper.verifyElementExistence(locaters.yesLabel,true)
    commonHelper.verifyElementExistence(locaters.noLabel,true)
    commonHelper.verifyElementExistence(locaters.impressiveLabel,true)
    commonHelper.verifyElementExistence(locaters.output,false)
    commonHelper.buttonStatus(locaters.yesRadio,true)
    commonHelper.buttonStatus(locaters.impressiveRadio,true)
    commonHelper.buttonStatus(locaters.noRadio,false)
}

const expectedOutput = [
    "You have selected Yes",
    "You have selected Impressive",

]
export const clickRadioAndcheckOutput = (locater,index) =>{
    commonHelper.clickOnElement(locater,true)
    commonHelper.checkedStatus(locater,true)
    commonHelper.verifyElementExistence(locaters.output,true).contains(expectedOutput[index])
}



