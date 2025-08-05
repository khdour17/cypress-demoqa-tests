export const visitPage = (url = '/') => {
    cy.visit(url)
}


export const iterateOnElements = (selector, callback) => {
  cy.get(selector).each(($el, index) => {
    callback($el, index)
  })
}

export const clickOnElement = (locater,ifForcing = false) => {
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
  cy.get(locater).clear().type(value)
}