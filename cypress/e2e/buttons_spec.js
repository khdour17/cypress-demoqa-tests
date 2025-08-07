import * as commonHelper from '../support/common_helper.js'
import * as buttonsHelper from '../support/buttons_helper.js'

describe('Buttons Page Tests:', () => {
  beforeEach(() => {
    commonHelper.visitPage('/buttons')
  })

  it('should verify buttons exist and no messages are initially visible', () => {
    buttonsHelper.verifyInitialButtonsState()
  })

  it('should perform a double click and verify message', () => {
    buttonsHelper.performDoubleClick()
  })

  it('should perform a right click and verify message', () => {
    buttonsHelper.performRightClick()
  })

  it('should perform a dynamic click and verify message', () => {
    buttonsHelper.performNormalClick()
  })

  it('should NOT show double-click message when double-clicking the right-click button', () => {
    buttonsHelper.doubleClickOnRightBtn()
  })

  it('should NOT show right-click message when right-clicking the double-click button', () => {
    buttonsHelper.rightClickOnDoubleBtn()
  })
})
