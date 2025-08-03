import * as commonHelper from '../support/common_helper.js';
import * as elementsPageHelper from '../support/elements_page_helper.js';
import * as textBoxHelper from '../support/text_box_helper.js';

describe("Text Box Form", () => {
  beforeEach(() => {
    commonHelper.visitPage('/text-box');
  });

  it("displays empty fields with proper placeholders", () => {
    textBoxHelper.verifyInitialFieldState();
  });

  it("submits all fields and verifies output", () => {
    textBoxHelper.fillForm(textBoxHelper.formData[0]);
    textBoxHelper.submitForm();
    textBoxHelper.verifyOutput(textBoxHelper.formData[0]);
    textBoxHelper.verifyEmailValidity(true);
  });

  it("submits with only full name", () => {
    textBoxHelper.fillForm(textBoxHelper.formData[1]);
    textBoxHelper.submitForm();
    textBoxHelper.verifyOutput(textBoxHelper.formData[1]);
  });

  it("submits with only current address", () => {
    textBoxHelper.fillForm(textBoxHelper.formData[2]);
    textBoxHelper.submitForm();
    textBoxHelper.verifyOutput(textBoxHelper.formData[2]);
  });

  it("submits with only permanent address", () => {
    textBoxHelper.fillForm(textBoxHelper.formData[3]);
    textBoxHelper.submitForm();
    textBoxHelper.verifyOutput(textBoxHelper.formData[3]);
  });

  it("rejects invalid email - missing @", () => {
    textBoxHelper.fillForm(textBoxHelper.formData[4]);
    textBoxHelper.submitForm();
    textBoxHelper.verifyFormNotSubmitted();
    textBoxHelper.verifyEmailValidity(false);
  });

  it("rejects invalid email - missing domain", () => {
    textBoxHelper.fillForm(textBoxHelper.formData[5]);
    textBoxHelper.submitForm();
    textBoxHelper.verifyFormNotSubmitted();
    textBoxHelper.verifyEmailValidity(false);
  });

  it("rejects invalid email - too short domain", () => {
    textBoxHelper.fillForm(textBoxHelper.formData[6]);
    textBoxHelper.submitForm();
    textBoxHelper.verifyFormNotSubmitted();
    textBoxHelper.verifyEmailValidity(false);
  });

  it("rejects invalid email - Arabic characters", () => {
    textBoxHelper.fillForm(textBoxHelper.formData[7]);
    textBoxHelper.submitForm();
    textBoxHelper.verifyFormNotSubmitted();
    textBoxHelper.verifyEmailValidity(false);
  });
});
