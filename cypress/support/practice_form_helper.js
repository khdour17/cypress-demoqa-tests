import * as commonHelper from './common_helper'

export const locators = {
  firstName: '#firstName',
  lastName: '#lastName',
  email: '#userEmail',
  genderOption: (gender) => `input[name="gender"][value="${gender}"]`,
  mobile: '#userNumber',

  dateOfBirth: '#dateOfBirthInput',
  monthSelect: '.react-datepicker__month-select',
  yearSelect: '.react-datepicker__year-select',
  dayOption: (day) => `.react-datepicker__day--0${day}`,

  subjectsInput: '#subjectsInput',
  subjectsDropdownMenu: '.subjects-auto-complete__menu',
  subjectsDropdownOption: '.subjects-auto-complete__option',

  hobbiesOption: 'label',
  hobbiesSports: '#hobbies-checkbox-1',
  hobbiesReading: '#hobbies-checkbox-2',
  hobbiesMusic: '#hobbies-checkbox-3',

  uploadPicture: '#uploadPicture',
  currentAddress: '#currentAddress',

  stateInput: '#state',
  stateDropdown: '#state .css-26l3qy-menu',
  cityInput: '#city',
  cityDropdown: '#city .css-26l3qy-menu',

  submitBtn: '#submit',

  submitionForm: '.modal-content'
}




const placeholderFields = [
    { locator: locators.firstName, placeholder: 'First Name' },
    { locator: locators.lastName, placeholder: 'Last Name' },
    { locator: locators.email, placeholder: 'name@example.com' },
    { locator: locators.mobile, placeholder: 'Mobile Number' },
    { locator: locators.currentAddress, placeholder: 'Current Address' }
]

export const testData = {
  states: ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'],
  cities: {
    NCR: ['Delhi', 'Gurgaon', 'Noida'],
    "Uttar Pradesh" : ['Agra', 'Lucknow', 'Merrut'],
    Haryana: ['Karnal', 'Panipat'],
    Rajasthan: ['Jaipur', 'Jaiselmer']
  }
}

const elements = [
    locators.firstName,
    locators.lastName,
    locators.email,
    locators.genderOption('Male'),
    locators.genderOption('Female'),
    locators.genderOption('Other'),
    locators.mobile,
    locators.dateOfBirth,
    locators.subjectsInput,
    locators.hobbiesSports,
    locators.hobbiesReading,
    locators.hobbiesMusic,
    locators.uploadPicture,
    locators.stateInput,
    locators.cityInput,
    locators.submitBtn
]


export const formData = [
    //  Positive full form
    {
        input: {
            firstName: 'Omar',
            lastName: 'Hassan',
            email: 'omar.hassan@example.com',
            gender: 'Female',
            mobile: '0791234567',
            dateOfBirth: '15 July 2001',
            subjects: ['Maths', 'English'],
            hobbies: ['Music', 'Reading'],
            picture: 'cypress/snapshots/test_image.jpeg',
            address: 'Sunset Blvd 45, Stockholm',
            state: 'Uttar Pradesh',
            city: 'Lucknow'
        },
        expected: {
            'Student Name': 'Omar Hassan',
            'Student Email': 'omar.hassan@example.com',
            'Gender': 'Female',
            'Mobile': '0791234567',
            'Date of Birth': '15 July,2001',
            'Subjects': 'Maths, English',
            'Hobbies': 'Music, Reading',
            'Picture': 'test_image.jpeg',
            'Address': 'Sunset Blvd 45, Stockholm',
            'State and City': 'Uttar Pradesh Lucknow'
        },
        ifPositive: true
    },


    //  Missing last name
    {
        input: {
        firstName: 'Sara',
        lastName: '',
        email: 'sara@test.com',
        gender: 'Female',
        mobile: '1234567890'
        },
        ifPositive: false
    },

    //  Invalid email format
    {
        input: {
        firstName: 'Omar',
        lastName: 'Hassan',
        email: 'invalid-email',
        gender: 'Male',
        mobile: '9876543210'
        },
        ifPositive: false
    },

    //  Missing mobile number
    {
        input: {
        firstName: 'Lina',
        lastName: 'Saad',
        email: 'lina@test.com',
        gender: 'Female',
        mobile: ''
        },
        ifPositive: false
    },

    // Invalid mobile number
    {
        input: {
        firstName: 'Lina',
        lastName: 'Saad',
        email: 'lina@test.com',
        gender: 'Female',
        mobile: '123dff5551'
        },
        ifPositive: false
    },

    //  Valid minimal form (only required fields)
    {
        input: {
        firstName: 'Karim',
        lastName: 'Yousef',
        gender: 'Male',
        mobile: '1234567890'
        },
        expected: {
        'Student Name': 'Karim Yousef',
        'Gender': 'Male',
        'Mobile': '1234567890',
        // Date defaults to today from the picker
        'Date of Birth': commonHelper.currentDate() 
        },
        ifPositive: true
    },

    //  Valid fields  not including state/city selection
    {
    input: {
        firstName: 'Nadia',
        lastName: 'Ali',
        email: 'nadia@test.com',
        gender: 'Female',
        mobile: '1234567890',
        dateOfBirth: '15 July 1997',
        subjects: ['Maths'],
    },
    expected: {
        'Student Name': 'Nadia Ali',
        'Student Email': 'nadia@test.com',
        'Gender': 'Female',
        'Mobile': '1234567890',
        'Date of Birth': '15 July,1997',
        'Subjects': 'Maths',
        
    },
    ifPositive: true
    },

    //  Valid with only one hobby
    {
        input: {
        firstName: 'Rami',
        lastName: 'Saleh',
        email: 'rami@test.com',
        gender: 'Other',
        mobile: '1112223333',
        hobbies: ['Music']
        },
        expected: {
        'Student Name': 'Rami Saleh',
        'Student Email': 'rami@test.com',
        'Gender': 'Other',
        'Mobile': '1112223333',
        'Hobbies': 'Music',
        'Date of Birth': commonHelper.currentDate()
        },
        ifPositive: true
    }
]



export const verifyElementsExist = () => {
  elements.forEach(el => commonHelper.verifyElementExistence(el, true))
}

export const verifyPlaceholders = () => {
  placeholderFields.forEach(field => commonHelper.elementHasPlaceholder(field.locator, field.placeholder))
}

export const verifyValues = () => {
  commonHelper.elementValue(locators.dateOfBirth, commonHelper.currentDateShort())
  commonHelper.clickOnElement(locators.cityInput,true)
  commonHelper.verifyElementExistence(locators.cityDropdown)
}

export const verifyDropdownOptions = () => {
  commonHelper.clickOnElement(locators.stateInput)               
  cy.get(locators.stateDropdown).should('be.visible')           

  testData.states.forEach(state => {
    cy.get(locators.stateDropdown).contains('div', state).should('exist')
  })

  cy.get('body').click(0, 0)

  testData.states.forEach(state => {
    commonHelper.clickOnElement(locators.stateInput)
    cy.get(locators.stateDropdown)
      .contains('div', state)                                                                 
      .click()                              

    cy.get(locators.cityInput).should('not.be.disabled')

    // open city menu and assert each expected city exists
    commonHelper.clickOnElement(locators.cityInput)
    cy.get(locators.cityDropdown)
    testData.cities[state].forEach(city => {
      cy.get(locators.cityDropdown).contains('div', city).should('exist')
    })

    cy.get('body').click(0, 0)
  })
}



export const fillForm = (data) => {
  // Required fields
  commonHelper.fillInput(locators.firstName, data.firstName)

  commonHelper.fillInput(locators.lastName, data.lastName)
  
  if(data.email){
    commonHelper.fillInput(locators.email, data.email)
  }
  
  commonHelper.checkElement(locators.genderOption(data.gender))
  commonHelper.fillInput(locators.mobile, data.mobile)

  // Date of birth
  if (data.dateOfBirth) {
    const [day, month, year] = data.dateOfBirth.split(' ') // e.g. "20 Aug 1998"

    commonHelper.clickOnElement(locators.dateOfBirth)
    cy.get(locators.monthSelect).select(month)
    cy.get(locators.yearSelect).select(year)

    const dayFormatted = day.padStart(2, '0')
    cy.get(locators.dayOption(dayFormatted)).click()
  }

  // Subjects (multi-input with dropdown)
  if (data.subjects?.length) {
    data.subjects.forEach(subject => {
      cy.get(locators.subjectsInput).type(subject)
      cy.get(locators.subjectsDropdownMenu).should('be.visible')
      cy.contains(locators.subjectsDropdownOption, subject).click()
    })
  }

  // Hobbies (multi-checkbox)
  if (data.hobbies?.length) {
    data.hobbies.forEach(hobby => {
      cy.contains(locators.hobbiesOption, hobby).click()
    })
  }

  // Upload picture
  if (data.picture) {
    commonHelper.uploadFile(locators.uploadPicture, data.picture)
  }

  // Address
  if (data.address) {
    commonHelper.fillInput(locators.currentAddress, data.address)
  }

  // State & City
  if (data.state && data.city) {
    commonHelper.clickOnElement(locators.stateInput)
    cy.contains(locators.stateDropdown + ' div', data.state).click()
    commonHelper.clickOnElement(locators.cityInput)
    cy.contains(locators.cityDropdown + ' div', data.city).click()
  }

  // Submit form
  commonHelper.clickOnElement(locators.submitBtn)
}

export const verifySubmission = (expected) => {
    
    commonHelper.verifyElementExistence(locators.submitionForm,true)

    Object.entries(expected).forEach(([label, value]) => {
        cy.get(locators.submitionForm)
        .contains('td', label)
        .siblings('td')
        .should('have.text', value)
    })
}

export const runFormTestCase = (index) => {
  // Fill form
  fillForm(formData[index].input)

  // Verify submission
  if(formData[index].ifPositive){
    verifySubmission(formData[index].expected)
  }
  else{
    commonHelper.verifyElementExistence(locators.submitionForm,false)
  }
  
}