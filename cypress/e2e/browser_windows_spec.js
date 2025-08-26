import * as commonHelper from '../support/common_helper.js'
import * as browserWindowsHelper from '../support/browser_windows_helper.js'

describe('Alerts, Frames, Windows Page', () => {
  beforeEach(() => {
    commonHelper.visitPage('/browser-windows')
  })

  it('checks elements exist', () => {
    browserWindowsHelper.verifyAllElementsExist()
  })

  it('opens new tab', () => {
    browserWindowsHelper.clickNewTabAndVerify()
  })

  it('opens new window', () => {
    browserWindowsHelper.clickNewWindowAndVerify()
  })

  it('opens message window', () => {
    browserWindowsHelper.clickMessageWindowAndVerify()
  })
})
