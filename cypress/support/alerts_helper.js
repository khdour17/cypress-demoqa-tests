import * as commonHelper from '../support/common_helper.js'

export const locators = {
  alertButton: "#alertButton",
  timerAlertButton: "#timerAlertButton",
  confirmButton: "#confirmButton",
  promptButton: "#promtButton",
  confirmResult: "#confirmResult",
  promptResult: "#promptResult"
}

// Test data stored inside helper
export const data = [
  { type: "immediate" },
  { type: "timer" },
  { type: "confirm", action: "ok" },
  { type: "confirm", action: "cancel" },
  { type: "prompt", inputValue: "Ali" }
]

const alertTexts = {
  immediate: "You clicked a button",
  timer: "This alert appeared after 5 seconds",
  confirm: "Do you confirm action?",
  prompt: "Please enter your name",
}

const resultTexts = {
  confirmOk: "You selected Ok",
  confirmCancel: "You selected Cancel",
  prompt: (name) => `You entered ${name}`
}

export const verifyElementExist = () =>{
    commonHelper.verifyElementExistence(locators.alertButton,true)
    commonHelper.verifyElementExistence(locators.timerAlertButton,true)
    commonHelper.verifyElementExistence(locators.confirmButton,true)
    commonHelper.verifyElementExistence(locators.promptButton,true)
}

// Methods
export const verifyImmediateAlert = () => {
  cy.window().then((win) => {
    cy.stub(win, "alert").as("alertStub")
  })
  commonHelper.clickOnElement(locators.alertButton)
  cy.get("@alertStub").should("have.been.calledOnceWith", alertTexts.immediate)
}

export const verifyTimerAlert = () => {
  cy.window().then((win) => {
    cy.stub(win, "alert").as("timerAlertStub")
  })
  commonHelper.clickOnElement(locators.timerAlertButton)
  cy.wait(5000)
  cy.get("@timerAlertStub").should("have.been.calledOnceWith", alertTexts.timer)
}

export const verifyConfirmAlert = (action = "ok") => {
  cy.window().then((win) => {
    cy.stub(win, "confirm").callsFake(() => action === "ok").as("confirmStub")
  })
  commonHelper.clickOnElement(locators.confirmButton)
  cy.get("@confirmStub").should("have.been.calledOnceWith", alertTexts.confirm)

  const expectedResult = action === "ok" ? resultTexts.confirmOk : resultTexts.confirmCancel
  commonHelper.elementContains(locators.confirmResult,expectedResult)
}

export const verifyPromptAlert = (inputValue) => {
  cy.window().then((win) => {
    cy.stub(win, "prompt").callsFake(() => inputValue).as("promptStub")
  })
  commonHelper.clickOnElement(locators.promptButton)
  cy.get("@promptStub").should("have.been.calledOnceWith", alertTexts.prompt)
  commonHelper.elementContains(locators.promptResult,resultTexts.prompt(inputValue))
}
