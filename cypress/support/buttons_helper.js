import * as commonHelper from './common_helper'

export const locaters = {
  doubleClickBtn: '#doubleClickBtn',
  rightClickBtn: '#rightClickBtn',
  normalBtn: 'button.btn:not(#doubleClickBtn):not(#rightClickBtn)',
  doubleClickMessage: '#doubleClickMessage',
  rightClickMessage: '#rightClickMessage',
  normalMessage: '#dynamicClickMessage'
}

const messages = [
  'double click',
  'right click',
  'dynamic click'
]

export const verifyInitialButtonsState = () => {
  commonHelper.verifyElementExistence(locaters.doubleClickBtn, true)
  commonHelper.verifyElementExistence(locaters.rightClickBtn, true)
  commonHelper.verifyElementExistence(locaters.normalBtn, true)

  commonHelper.verifyElementExistence(locaters.doubleClickMessage, false)
  commonHelper.verifyElementExistence(locaters.rightClickMessage, false)
  commonHelper.verifyElementExistence(locaters.normalMessage, false)
}

export const performDoubleClick = () => {
  commonHelper.doubleClickOnElement(locaters.doubleClickBtn, true)
  commonHelper.verifyElementExistence(locaters.doubleClickMessage, true)
  commonHelper.elementContains(locaters.doubleClickMessage, messages[0])
}

export const performRightClick = () => {
  commonHelper.rightClickOnElement(locaters.rightClickBtn, false)
  commonHelper.verifyElementExistence(locaters.rightClickMessage, true)
  commonHelper.elementContains(locaters.rightClickMessage, messages[1])
}

export const performNormalClick = () => {
  commonHelper.clickOnElement(locaters.normalBtn)
  commonHelper.verifyElementExistence(locaters.normalMessage, true)
  commonHelper.elementContains(locaters.normalMessage, messages[2])
}

export const doubleClickOnRightBtn = () => {
  commonHelper.clickOnElement(locaters.rightClickBtn,true)
  commonHelper.verifyElementExistence(locaters.doubleClickMessage, false)
}

export const rightClickOnDoubleBtn = () => {
  commonHelper.rightClickOnElement(locaters.doubleClickBtn)
  commonHelper.verifyElementExistence(locaters.rightClickMessage, false)
}
