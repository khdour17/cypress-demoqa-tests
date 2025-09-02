import * as commonHelper from './common_helper.js'

export const locators = {
  progressBar: '#progressBar .progress-bar',
  startStopBtn: '#startStopButton',
  resetBtn: '#resetButton'
}

// --- Verify initial state ---
export const verifyInitialState = () => {
  commonHelper.verifyElementExistence(locators.progressBar, true)
  commonHelper.verifyElementExistence(locators.startStopBtn, true)
  commonHelper.verifyElementExistence(locators.resetBtn, false)
  cy.get(locators.progressBar)
    .should('have.attr', 'aria-valuenow', '0')
    .and('contain.text', '0%')
}

// --- Start progress, stop mid-way, then check value ---
export const startStopCheck = () => {
  commonHelper.clickOnElement(locators.startStopBtn)

  // Wait until progress reaches at least 15%
  cy.get(locators.progressBar, { timeout: 20000 })
    .should(($bar) => {
      const value = parseInt($bar.attr('aria-valuenow'))
      expect(value).to.be.at.least(15)
      expect(value).to.be.lessThan(100)
    })

  commonHelper.clickOnElement(locators.startStopBtn) // Stop

  // Check value after stop
  cy.get(locators.progressBar)
    .should(($bar) => {
      const value = parseInt($bar.attr('aria-valuenow'))
      expect(value).to.be.at.least(15)
      expect(value).to.be.lessThan(100)
    })
}

// --- Start, stop, continue, then check final value ---
export const startStopContinue = () => {
  commonHelper.clickOnElement(locators.startStopBtn)

  cy.get(locators.progressBar, { timeout: 20000 })
    .should(($bar) => {
      const value = parseInt($bar.attr('aria-valuenow'))
      expect(value).to.be.at.least(10)
      expect(value).to.be.lessThan(100)
    })

  commonHelper.clickOnElement(locators.startStopBtn) // Stop

  // Check value after stop
  cy.get(locators.progressBar)
    .should(($bar) => {
      const value = parseInt($bar.attr('aria-valuenow'))
      expect(value).to.be.at.least(10)
      expect(value).to.be.lessThan(100)
    })

  commonHelper.clickOnElement(locators.startStopBtn) // Continue

  // Wait until 20%
  cy.get(locators.progressBar, { timeout: 20000 })
    .should('have.attr', 'aria-valuenow', '20')
    .and('contain.text', '20%')
}

// --- Complete progress and reset ---
export const completeAndReset = () => {
  commonHelper.clickOnElement(locators.startStopBtn)

  // Wait until 100%
  cy.get(locators.progressBar, { timeout: 20000 })
    .should('have.attr', 'aria-valuenow', '100')
    .and('contain.text', '100%')
    .and('have.class', 'bg-success')

  commonHelper.verifyElementExistence(locators.resetBtn, true)
  commonHelper.clickOnElement(locators.resetBtn)

  cy.get(locators.progressBar)
    .should('have.attr', 'aria-valuenow', '0')
    .and('contain.text', '0%')
}
