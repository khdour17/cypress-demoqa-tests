import * as commonHelper from '../support/common_helper.js'
import * as progressBarHelper from '../support/progress_bar_helper.js'

describe('Progress Bar Page Tests', () => {
  beforeEach(() => {
    commonHelper.visitPage('/progress-bar') 
  })

  it('Verify initial elements', () => {
    progressBarHelper.verifyInitialState()
  })

  it('Complete progress and reset', () => {
    progressBarHelper.completeAndReset()
  })

  it('Start, stop, then continue to target', () => {
    progressBarHelper.startStopContinue()
  })

  it('Start, stop mid-progress', () => {
    progressBarHelper.startStopCheck()
  })

})
