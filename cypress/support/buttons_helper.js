import * as commonHelper from './common_helper'

export const locaters = {
  doubleClickBtn: '#doubleClickBtn',
  rightClickBtn: '#rightClickBtn',
  normalBtn: 'button.btn:not(#doubleClickBtn):not(#rightClickBtn)',
  doubleClickMessage: '#doubleClickMessage',
  rightClickMessage: '#rightClickMessage',
  normalMessage: '#dynamicClickMessage'
}

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
  commonHelper.elementContains(locaters.doubleClickMessage, 'double click')
}

export const performRightClick = () => {
  commonHelper.rightClickOnElement(locaters.rightClickBtn, false)
  commonHelper.verifyElementExistence(locaters.rightClickMessage, true)
  commonHelper.elementContains(locaters.rightClickMessage, 'right click')
}

export const performNormalClick = () => {
  commonHelper.clickOnElement(locaters.normalBtn)
  commonHelper.verifyElementExistence(locaters.normalMessage, true)
  commonHelper.elementContains(locaters.normalMessage, 'dynamic click')
}

export const doubleClickOnRightBtn = () => {
  commonHelper.doubleClickOnElement(locaters.rightClickBtn)
  commonHelper.verifyElementExistence(locaters.doubleClickMessage, false)
}

export const rightClickOnDoubleBtn = () => {
  commonHelper.rightClickOnElement(locaters.doubleClickBtn)
  commonHelper.verifyElementExistence(locaters.rightClickMessage, false)
}
