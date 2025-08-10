import * as commonHelper from '../support/common_helper.js'
import * as homePageHelper from '../support/home_page_helper.js'

describe('Home page tests', () => {
  beforeEach(() => {
    commonHelper.visitPage(Cypress.config('baseUrl'))
  })

  it('Check category cards count', () => {
    homePageHelper.checkCatagoryCardsCount()
  })

  it('Check card names', () => {
    homePageHelper.checkCardsName()
  })

  it('Card 1: Elements opens correct page', () => {
    homePageHelper.checkCardClickRedirects(0)
  })

  it('Card 2: Forms opens correct page', () => {
    homePageHelper.checkCardClickRedirects(1)
  })

  it('Card 3: Alerts, Frame & Windows opens correct page', () => {
    homePageHelper.checkCardClickRedirects(2)
  })

  it('Card 4: Widgets opens correct page', () => {
    homePageHelper.checkCardClickRedirects(3)
  })

  it('Card 5: Interactions opens correct page', () => {
    homePageHelper.checkCardClickRedirects(4)
  })

  it('Card 6: Book Store Application opens correct page', () => {
    homePageHelper.checkCardClickRedirects(5)
  })
})
