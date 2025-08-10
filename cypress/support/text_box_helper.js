import * as commonHelper from '../support/common_helper.js'
import * as elementsPageHelper from '../support/elements_page_helper.js'

export const locaters = {
  form: '#userForm',
  userNameInput: '#userName',
  emailInput: '#userEmail',
  currentAddressInput: '#currentAddress',
  permanentAddressInput: '#permanentAddress',
  submitBtn: '#submit',
  output: '#output',
  outputName: '#name',
  outputEmail: '#email',
  outputCurAddress: '#currentAddress',
  outputPerAddress: '#permanentAddress',
}

export const formData = [
  {
    fullName: 'Ali Khdour',
    email: 'ali@example.com',
    currentAddress: 'Ramallah',
    permanentAddress: 'Hebron',
  },
  { fullName: 'Ali Khdour' },
  { currentAddress: 'Ramallah' },
  { permanentAddress: 'Hebron' },
  { fullName: 'Ali', email: 'invalid-email' },
  { fullName: 'Ali', email: 'ali@example' },
  { email: 'ali@example.c' },
  { email: 'علي@example.com' },
]

const placeholders = [
  'Full Name',
  'name@example.com',
  'Current Address'
]

export const verifyFormNotSubmitted = () => {
  cy.get(locaters.output).should('have.value', '')
}

export const verifyFieldIsEmpty = ({ locator, placeholder, skipPlaceholderCheck = false }) => {
  let chain = cy.get(locator).should('have.value', '')
  if (!skipPlaceholderCheck && placeholder) {
    chain.and('have.attr', 'placeholder', placeholder)
  }
}

export const verifyInitialFieldState = () => {
  verifyFieldIsEmpty({ locator: locaters.userNameInput, placeholder: placeholders[0] })
  verifyFieldIsEmpty({ locator: locaters.emailInput, placeholder: placeholders[1] })
  verifyFieldIsEmpty({ locator: locaters.currentAddressInput, placeholder: placeholders[2] })
  verifyFieldIsEmpty({ locator: locaters.permanentAddressInput, skipPlaceholderCheck: true })
  verifyFormNotSubmitted()
}

export const fillForm = (data) => {
  if (data.fullName) {
    commonHelper.fillInput(locaters.userNameInput,data.fullName)
  }
  if (data.email) {
    commonHelper.fillInput(locaters.emailInput,data.email)
  }
  if (data.currentAddress) {
    commonHelper.fillInput(locaters.currentAddressInput,data.currentAddress)
  }
  if (data.permanentAddress) {
    commonHelper.fillInput(locaters.permanentAddressInput,data.permanentAddress)
  }
}

export const submitForm = () => {
  commonHelper.clickOnElement(locaters.submitBtn)
}

export const verifyOutput = (data) => {
  cy.get(locaters.output).within(()=>{
    if (data.fullName) {
      commonHelper.elementContains(locaters.outputName,data.fullName)
    }
    if (data.email) {
      commonHelper.elementContains(locaters.outputEmail,data.email)
    }
    if (data.currentAddress) {
      commonHelper.elementContains(locaters.outputCurAddress,data.currentAddress)
    }
    if (data.permanentAddress) {
      commonHelper.elementContains(locaters.outputPerAddress,data.permanentAddress)
    }
  })
  
}

export const verifyEmailValidity = (shouldBeValid = true) => {
  const emailField = cy.get(locaters.emailInput)
  if (shouldBeValid) {
    emailField.should('not.have.class', 'field-error')
  } else {
    emailField.should('have.class', 'field-error')
  }
}
