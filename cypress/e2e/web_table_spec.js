import * as commonHelper from './common_helper'
import * as webTableHelper from '../support/web_table_helper.js'

describe('Web Tables Tests', () => {
  beforeEach(() => {
    commonHelper.visitPage('/webtables')
  })


  it('Should add a new user to the table', () => {
    addNewUser(webTableHelper.userData[0])
  })

  
})