export const visitPage = (url = '/') => {
  cy.visit(url)
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

export const checkElement = (locater) =>{
  return cy.get(locater).check({ force: true })
}

export const verifyElementExistence = (locater, flag) => {
  if(flag){
    return cy.get(locater).should('exist')
  } 
  else{
    return cy.get(locater).should('not.exist')
  }
}

export const verifyVisibility = (locater, flag) => {
  if(flag){
    return cy.get(locater).should('be.visible')
  }
  else{
    return cy.get(locater).should('not.be.visible')
  }
}

export const elementItemsLength = (locater,length) =>{
  return cy.get(locater).should('have.length', length)
}

export const elementContains = (locater,text) => {
  return cy.get(locater).contains(text)
}

export const elementHasPlaceholder = (selector, placeholder) => {
  cy.get(selector)
    .should('exist')
    .and('have.attr', 'placeholder', placeholder)
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
  if(value){
    return cy.get(locater).clear().type(value)
  }
}


export const interceptApi = (apiEndpoint) => {
  return cy.intercept('GET', `**/${apiEndpoint}`).as('apiCheck')
}

export const uploadFile = (locater,path) =>{
  return cy.get(locater).selectFile(path, { force: true })
}

export const currentDate =  () => {
  const today = new Date()
  const day = today.toLocaleString('en-GB', { day: '2-digit' })
  const month = today.toLocaleString('en-GB', { month: 'long' })
  const year = today.getFullYear()

  return `${day} ${month},${year}` 
}
export const currentDateShort = () => {
  return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/,/g,'');
}