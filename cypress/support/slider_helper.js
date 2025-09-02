import * as commonHelper from './common_helper.js'

export const locators = {
  slider: 'input[type="range"]',
  sliderValueInput: '#sliderValue',
  tooltipValue: '.range-slider__tooltip__label'
}

export const testData = [
  { value: 0 },
  { value: 30 },
  { value: 50 },
  { value: 75 },
  { value: 100 }
]

export const verifyAllElementsExist = () => {
  commonHelper.verifyElementExistence(locators.slider, true)
  commonHelper.verifyElementExistence(locators.sliderValueInput, true)
  commonHelper.verifyElementExistence(locators.tooltipValue, true)
}

export const verifyDefaultState = () => {
  commonHelper.elementValue(locators.sliderValueInput, '25')
  commonHelper.elementContains(locators.tooltipValue, '25')
}

export const moveSliderAndVerify = (data) => {
  cy.get(locators.slider)
    .invoke('val', data.value) // set slider to value
    .trigger('input') // trigger value change
    .trigger('change') // sometimes needed

  // verification
  commonHelper.elementContains(locators.tooltipValue, data.value.toString())
  commonHelper.elementValue(locators.sliderValueInput, data.value.toString())
}





