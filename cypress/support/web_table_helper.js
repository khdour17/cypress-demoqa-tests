import * as commonHelper from './common_helper'

export const locators = {
    addBtn: '#addNewRecordButton',
    searchBox: '#searchBox',
    tableRows: '.rt-tbody .rt-tr-group',
    editBtn: '.action-buttons span[title="Edit"]',
    deleteBtn: '.action-buttons span[title="Delete"]',
    formModal: '.modal-content',
    submitBtn: '#submit',
    firstName: '#firstName',
    lastName: '#lastName',
    email: '#userEmail',
    age: '#age',
    salary: '#salary',
    department: '#department'
}

export const userData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      age: '35',
      salary: '5000',
      department: 'QA'
    },
]

// Helper functions

export const fillUserForm = (user) => {
  commonHelper.fillInput(locators.firstName,user,firstName)
  commonHelper.fillInput(locators.lastName,user.lastName)
  commonHelper.fillInput(locators.email,user.email)
  commonHelper.fillInput(locators.age,user.age)
  commonHelper.fillInput(locators.salary,user.salary)
  commonHelper.fillInput(locators.department,user.department)
}

export const addNewUser = (user) => {
  commonHelper.clickOnElement(locators.addBtn)
  cy.get(webTableLocators.formModal).should('be.visible')
  fillUserForm(user)
  commonHelper.clickOnElement(locators.submitBtn)
}

// export const verifyUserData = () =>{
    
// }