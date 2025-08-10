import cypress from 'cypress'
import * as commonHelper from '../support/common_helper.js'
import * as webTableHelper from '../support/web_table_helper.js'

describe('Web Tables Tests', () => {
  beforeEach(() => {
    commonHelper.visitPage(Cypress.config('baseUrl'))
  })

  it('should verify all UI elements exist', () => {
    webTableHelper.verifyElementsExist()
  })

  it('should verify table headers are correct', () => {
    webTableHelper.verifyTableHeaders()
  })

  it('should verify initial users are displayed correctly', () => {
    webTableHelper.userData.slice(0, 2).forEach(user => {
      webTableHelper.verifyUserInTable(user)
    })
  })

  it('should add a single user and verify', () => {
    webTableHelper.addNewUser(webTableHelper.userData[3])
    webTableHelper.verifyUserInTable(webTableHelper.userData[3])
  })

  it('should edit a user and verify changes', () => {
    webTableHelper.editUserAndVerify(webTableHelper.editedUserData[0])
  })

  it('should add multiple users and trigger pagination', () => {
    webTableHelper.addMultipleUsers(webTableHelper.multipleNewUsers)
  })
})
