import * as commonHelper from './common_helper'

export const locators = {
  simpleLink: '#simpleLink',
  dynamicLink: '#dynamicLink',

  createdLink: '#created',
  noContentLink: '#no-content',
  movedLink: '#moved',
  badRequestLink: '#bad-request',
  unauthorizedLink: '#unauthorized',
  forbiddenLink: '#forbidden',
  notFoundLink: '#invalid-url',

  linkResponse: '#linkResponse'
}

export const apiLinksData = [
  { locator: locators.createdLink, endpoint: 'created', status: 201, message: 'Created' },
  { locator: locators.noContentLink, endpoint: 'no-content', status: 204, message: 'No Content' },
  { locator: locators.movedLink, endpoint: 'moved', status: 301, message: 'Moved Permanently' },
  { locator: locators.badRequestLink, endpoint: 'bad-request', status: 400, message: 'Bad Request' },
  { locator: locators.unauthorizedLink, endpoint: 'unauthorized', status: 401, message: 'Unauthorized' },
  { locator: locators.forbiddenLink, endpoint: 'forbidden', status: 403, message: 'Forbidden' },
  { locator: locators.notFoundLink, endpoint: 'invalid-url', status: 404, message: 'Not Found' }
]

export const verifyInitialLinks = () => {
  Object.values(locators).forEach(locator => {
    if (locator !== locators.linkResponse) {
      commonHelper.verifyElementExistence(locator, true)
    }
  })
  commonHelper.verifyElementExistence(locators.linkResponse, false)
}

export const clickExternalLink = (locator) => {
  cy.get(locator).invoke('removeAttr','target').click() 
  cy.url().should('eq', 'https://demoqa.com/')
}

export const clickApiLinkAndVerify = (locator, apiEndpoint, expectedStatus, expectedText) => {
  commonHelper.interceptGetApi(apiEndpoint,'apiCheck')
  commonHelper.clickOnElement(locator)

  cy.wait('@apiCheck')
    .its('response.statusCode')
    .should('eq', expectedStatus)

  commonHelper.verifyElementExistence(locators.linkResponse, true)
  commonHelper.elementContains(locators.linkResponse, expectedStatus)
  commonHelper.elementContains(locators.linkResponse, expectedText)
}
