import * as commonHelper from './common_helper'

export const locators = {
  addBtn: '#addNewRecordButton',
  searchBox: '#searchBox',
  tableBody: '.rt-tbody',
  tableHeaders: '.rt-table .rt-thead.-header .rt-th',
  tableFooter: '.-pagination',
  tableRows: '.rt-tbody .rt-tr-group',
  columnCells: '.rt-td',
  editBtn: '.action-buttons span[title="Edit"]',
  deleteBtn: '.action-buttons span[title="Delete"]',
  formModal: '.modal-content',
  submitBtn: '#submit',
  firstName: '#firstName',
  lastName: '#lastName',
  email: '#userEmail',
  age: '#age',
  salary: '#salary',
  department: '#department',

  prevBtn: '.-previous .-btn',
  nextBtn: '.-next .-btn',
  pageInfo: '.-pageInfo',
  jumpInput: '.-pageJump input[aria-label="jump to page"]',
  totalPages: '.-totalPages',
  rowSelect: '.-pageSizeOptions select[aria-label="rows per page"]',
}

const expectedHeaders = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action']

export const userData = [
  {
    firstName: 'Cierra',
    lastName: 'Vega',
    age: '39',
    email: 'cierra@example.com',
    salary: '10000',
    department: 'Insurance'
  },
  {
    firstName: 'Alden',
    lastName: 'Cantrell',
    age: '45',
    email: 'alden@example.com',
    salary: '12000',
    department: 'Compliance'
  },
  {
    firstName: 'Kierra',
    lastName: 'Gentry',
    age: '29',
    email: 'kierra@example.com',
    salary: '2000',
    department: 'Legal'
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: '35',
    email: 'john.doe@example.com',
    salary: '5000',
    department: 'QA'
  },
]

export const editedUserData = [
  {
    firstName: 'Cierra',
    lastName: 'Smith',
    age: '40',
    email: 'cierra@example.com',
    salary: '11000',
    department: 'HR'
  }
]

export const multipleNewUsers = [
  {
    firstName: 'Sarah',
    lastName: 'Connor',
    age: '35',
    email: 's.connor@example.com',
    salary: '8500',
    department: 'Operations'
  },
  {
    firstName: 'Michael',
    lastName: 'Scott',
    age: '40',
    email: 'm.scott@example.com',
    salary: '9000',
    department: 'Sales'
  },
  {
    firstName: 'Dwight',
    lastName: 'Schrute',
    age: '38',
    email: 'd.schrute@example.com',
    salary: '7800',
    department: 'Sales'
  },
  {
    firstName: 'Jim',
    lastName: 'Halpert',
    age: '32',
    email: 'j.halpert@example.com',
    salary: '7500',
    department: 'Marketing'
  },
  {
    firstName: 'Pam',
    lastName: 'Beesly',
    age: '30',
    email: 'p.beesly@example.com',
    salary: '7100',
    department: 'Reception'
  },
  {
    firstName: 'Angela',
    lastName: 'Martin',
    age: '34',
    email: 'a.martin@example.com',
    salary: '7300',
    department: 'Accounting'
  },
  {
    firstName: 'Stanley',
    lastName: 'Hudson',
    age: '50',
    email: 's.hudson@example.com',
    salary: '7800',
    department: 'Sales'
  },
  {
    firstName: 'Kevin',
    lastName: 'Malone',
    age: '37',
    email: 'k.malone@example.com',
    salary: '6900',
    department: 'Accounting'
  },
  {
    firstName: 'Toby',
    lastName: 'Flenderson',
    age: '42',
    email: 't.flenderson@example.com',
    salary: '7200',
    department: 'HR'
  },
  {
    firstName: 'Kelly',
    lastName: 'Kapoor',
    age: '29',
    email: 'k.kapoor@example.com',
    salary: '6800',
    department: 'Customer Service'
  }
];


// ✅ Verifies page structure
export const verifyElementsExist = () => {
  commonHelper.verifyElementExistence(locators.addBtn, true)
  commonHelper.verifyElementExistence(locators.searchBox, true)
  commonHelper.verifyElementExistence(locators.tableBody, true)
  commonHelper.verifyElementExistence(locators.tableHeaders, true)
  commonHelper.elementItemsLength(locators.tableHeaders, 7)
  commonHelper.verifyElementExistence(locators.tableFooter, true)
  commonHelper.verifyElementExistence(locators.prevBtn, true)
  commonHelper.verifyElementExistence(locators.nextBtn, true)
  commonHelper.verifyElementExistence(locators.pageInfo, true)
  commonHelper.verifyElementExistence(locators.jumpInput, true)
  commonHelper.verifyElementExistence(locators.totalPages, true)
  commonHelper.verifyElementExistence(locators.rowSelect, true)
  commonHelper.verifyElementExistence(locators.tableRows, true)
  commonHelper.verifyElementExistence(locators.formModal, false)
  commonHelper.elementValue(locators.rowSelect, 10)
}

// ✅ Fill modal
export const fillUserForm = (user) => {
  commonHelper.fillInput(locators.firstName, user.firstName)
  commonHelper.fillInput(locators.lastName, user.lastName)
  commonHelper.fillInput(locators.email, user.email)
  commonHelper.fillInput(locators.age, user.age)
  commonHelper.fillInput(locators.salary, user.salary)
  commonHelper.fillInput(locators.department, user.department)
}

// ✅ Add one
export const addNewUser = (user) => {
  commonHelper.clickOnElement(locators.addBtn)
  commonHelper.verifyElementExistence(locators.formModal, true)
  fillUserForm(user)
  commonHelper.clickOnElement(locators.submitBtn)
}

// ✅ Add many
export const addMultipleUsers = (usersArray) => {
  usersArray.forEach(user => addNewUser(user))


  if (usersArray.length > 10) {
    cy.get(locators.paginationPages).should('exist')
    cy.get(locators.paginationPages).its('length').should('be.greaterThan', 1)
  }

  cy.get(locators.tableRows).its('length').should('be.gte', Math.min(10, usersArray.length))
}

// ✅ Verify headers
export const verifyTableHeaders = () => {
  cy.get(locators.tableHeaders).each(($el, index) => {
    cy.wrap($el).should('contain.text', expectedHeaders[index])
  })
}

// ✅ Verify any user by email
export const verifyUserInTable = (user, skipLastCell = true) => {
  cy.get(locators.tableRows)
    .contains(user.email)
    .parents(locators.tableRows)
    .within(() => {
      cy.get(locators.columnCells).each(($cell, index, $cells) => {
        if (skipLastCell && index === $cells.length - 1) return

        const expectedValue = Object.values(user)[index]
        cy.wrap($cell).should('have.text', expectedValue)
      })
    })
}


// ✅ Edit user by email and verify
export const editUserAndVerify = (updatedUser) => {
  cy.get(locators.tableRows)
    .contains(updatedUser.email)
    .parents(locators.tableRows)
    .within(() => {
      commonHelper.clickOnElement(locators.editBtn, true)
    })

  fillUserForm(updatedUser)
  commonHelper.clickOnElement(locators.submitBtn)

  verifyUserInTable(updatedUser)
}
