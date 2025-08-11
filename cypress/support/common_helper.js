export const visitPage = (url = '/') => {
  cy.visit(url)
}

export const visitConfiguredPage = () => {
  const path = Cypress.env('startPath') || '/'
  cy.visit(path)
} 

export const iterateOnElements = (selector, callback) => {
  cy.get(selector).each(($el, index) => {
    callback($el, index)
  })
}

export const clickOnElement = (locator, ifForcing = false) => {
  return cy.get(locator).click({ force: ifForcing })
}

export const doubleClickOnElement = (locator, ifForcing = false) => {
  return cy.get(locator).dblclick({ force: ifForcing })
}

export const rightClickOnElement = (locator, ifForcing = false) => {
  return cy.get(locator).rightclick({ force: ifForcing })
}

export const dublleclickOnElement = (locater,ifForcing = false) => {
  return cy.get(locater).click({force:ifForcing})
}

export const verifyElementExistence = (locater, flag) => {
  if(flag){
    return cy.get(locater).should('exist')
  }
  else{
    return cy.get(locater).should('not.exist')
  }
}

export const elementItemsLength = (locater,length) =>{
  return cy.get(locater).should('have.length', length)
}

export const elementContains = (locater,text) => {
  return cy.get(locater).contains(text)
}

export const elementValue = (locater,value) =>{
  return cy.get(locater).should('have.value',value)
}

export const buttonStatus = (locater,flag) => {
  if(flag){
    return cy.get(locater).should('be.enabled')
  }
  else{
    return cy.get(locater).should('be.disabled')
  }
}

export const checkedStatus = (locater,flag) => {
  if(flag){
    return cy.get(locater).should('be.checked')
  }
  else{
    return cy.get(locater).should('not.be.checked')
  }
}

export const fillInput = (locater,value) =>{
  return cy.get(locater).clear().type(value)
}


export const interceptGetApi = (apiEndpoint, alias) => {
  return cy.intercept('GET', `**/${apiEndpoint}`).as(alias)
}