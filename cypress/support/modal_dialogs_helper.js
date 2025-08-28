import * as commonHelper from '../support/common_helper.js'

export const locators = {
  smallBtn: '#showSmallModal',
  largeBtn: '#showLargeModal',
  smallModal: '.modal-dialog.modal-sm',
  largeModal: '.modal-dialog.modal-lg',
  modalHeader: '.modal-title',
  modalBody: '.modal-body',
  modalFooterBtn: '.modal-footer > button',
  closeIcon: '.modal-header .close'
}

const expectedText = {
  smallHeader: 'Small Modal',
  largeHeader: 'Large Modal',
  smallBody: 'This is a small modal. It has very less content',
  largeBody:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export const verifyAllElementsExist = () => {
  commonHelper.verifyElementExistence(locators.smallBtn, true)
  commonHelper.verifyElementExistence(locators.largeBtn, true)
}

export const verifySmallModal = () => {
  commonHelper.clickOnElement(locators.smallBtn)
  commonHelper.verifyVisibility(locators.smallModal, true)

  commonHelper.elementContains(locators.modalHeader, expectedText.smallHeader)
  commonHelper.elementContains(locators.modalBody, expectedText.smallBody)

  // Close modal with footer button
  commonHelper.clickOnElement(locators.modalFooterBtn)
  commonHelper.verifyElementExistence(locators.smallModal, false)
}

export const verifyLargeModal = () => {
  commonHelper.clickOnElement(locators.largeBtn)
  commonHelper.verifyVisibility(locators.largeModal, true)

  commonHelper.elementContains(locators.modalHeader, expectedText.largeHeader)
  commonHelper.elementContains(locators.modalBody, expectedText.largeBody)

  // Close modal with "X"
  commonHelper.clickOnElement(locators.closeIcon)
  commonHelper.verifyElementExistence(locators.largeModal, false)
}

export const verifyOnlyOneModalOpen = () => {
  // Open small modal
  commonHelper.clickOnElement(locators.smallBtn)
  commonHelper.verifyVisibility(locators.smallModal, true)
  commonHelper.verifyElementExistence(locators.largeModal, false)

  // Close it
  commonHelper.clickOnElement(locators.modalFooterBtn)

  // Open large modal
  commonHelper.clickOnElement(locators.largeBtn)
  commonHelper.verifyVisibility(locators.largeModal, true)
  commonHelper.verifyElementExistence(locators.smallModal, false)
}
