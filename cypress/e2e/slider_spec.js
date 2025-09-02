import * as commonHelper from '../support/common_helper.js'
import * as sliderHelper from '../support/slider_helper.js'

describe('Slider Page Tests', () => {
  beforeEach(() => {
    commonHelper.visitPage('/slider')
  })

  it('Verify all slider elements exist', () => {
    sliderHelper.verifyAllElementsExist()
  })

  it('Verify default slider state is 25', () => {
    sliderHelper.verifyDefaultState()
  })

  it('Move slider to 0 and verify value', () => {
    sliderHelper.moveSliderAndVerify(sliderHelper.testData[0])
  })

  it('Move slider to 30 and verify value', () => {
    sliderHelper.moveSliderAndVerify(sliderHelper.testData[1])
  })

  it('Move slider to 75 and verify value', () => {
    sliderHelper.moveSliderAndVerify(sliderHelper.testData[3])
  })

  it('Move slider to 100 and verify value', () => {
    sliderHelper.moveSliderAndVerify(sliderHelper.testData[4])
  })
})
