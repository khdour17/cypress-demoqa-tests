import * as commonHelper from '../support/common_helper.js'

//Locaters
export const locaters = {
    categoryCards : '.category-cards',
    card : '.card.mt-4.top-card'
}

//Needed data

const expectedCategoryCardNames = [
  'Elements',
  'Forms',
  'Alerts, Frame & Windows',
  'Widgets',
  'Interactions',
  'Book Store Application'
]

const expectedCategoryURLNames = [
  '/elements',
  '/forms',
  '/alertsWindows',
  '/widgets',
  '/interaction',
  '/books'
]

//Functions
export const checkCatagoryCardsCount = () => {
    cy.get(locaters.categoryCards).children().should('have.length', 6)
}

export const checkCardsName = (expectedTitles) => {
  commonHelper.iterateOnElements(locaters.card, ($el, index) => {
    cy.wrap($el).should('contain.text', expectedTitles[index])
  })
}

export const checkCardClickRedirects = (index) =>{
    cy.get(locaters.card).eq(index).click()
    cy.location('pathname').should('equal', expectedCategoryURLNames[index])
    cy.go('back')
   
}