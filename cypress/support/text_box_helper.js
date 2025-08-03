import * as commonHelper from '../support/common_helper.js';
import * as elementsPageHelper from '../support/elements_page_helper.js';

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
};

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
];

export const verifyFormNotSubmitted = () => {
  cy.get(locaters.output).should('have.value', '');
};

export const verifyFieldIsEmpty = ({ locator, placeholder, skipPlaceholderCheck = false }) => {
  let chain = cy.get(locator).should('have.value', '');
  if (!skipPlaceholderCheck && placeholder) {
    chain.and('have.attr', 'placeholder', placeholder);
  }
};

export const verifyInitialFieldState = () => {
  verifyFieldIsEmpty({ locator: locaters.userNameInput, placeholder: 'Full Name' });
  verifyFieldIsEmpty({ locator: locaters.emailInput, placeholder: 'name@example.com' });
  verifyFieldIsEmpty({ locator: locaters.currentAddressInput, placeholder: 'Current Address' });
  verifyFieldIsEmpty({ locator: locaters.permanentAddressInput, skipPlaceholderCheck: true });
  verifyFormNotSubmitted();
};

export const fillForm = (data) => {
  if (data.fullName) {
    cy.get(locaters.userNameInput).clear().type(data.fullName);
  }
  if (data.email) {
    cy.get(locaters.emailInput).clear().type(data.email);
  }
  if (data.currentAddress) {
    cy.get(locaters.currentAddressInput).clear().type(data.currentAddress);
  }
  if (data.permanentAddress) {
    cy.get(locaters.permanentAddressInput).clear().type(data.permanentAddress);
  }
};

export const submitForm = () => {
  cy.get(locaters.submitBtn).click();
};

export const verifyOutput = (data) => {
  cy.get(locaters.output).within(()=>{
    if (data.fullName) {
      cy.get(locaters.outputName).should('contain.text', data.fullName);
    }
    if (data.email) {
      cy.get(locaters.outputEmail).should('contain.text', data.email);
    }
    if (data.currentAddress) {
      cy.get(locaters.outputCurAddress).should('contain.text', data.currentAddress);
    }
    if (data.permanentAddress) {
      cy.get(locaters.outputPerAddress).should('contain.text', data.permanentAddress);
    }
  })
  
};

export const verifyEmailValidity = (shouldBeValid = true) => {
  const emailField = cy.get(locaters.emailInput);
  if (shouldBeValid) {
    emailField.should('not.have.class', 'field-error');
  } else {
    emailField.should('have.class', 'field-error');
  }
};
