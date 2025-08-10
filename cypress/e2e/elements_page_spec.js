import * as commonHelper from '../support/common_helper.js';
import * as elementsPageHelper from '../support/elements_page_helper.js';

describe('Elements Page UI', () => {
  beforeEach(() => {
    commonHelper.visitPage(Cypress.config('baseUrl'));
  });

  it('displays default instruction message', () => {
    elementsPageHelper.verifyInstructionText();
  });

  it('shows 6 element groups in the sidebar', () => {
    elementsPageHelper.verifySidebarGroupCount();
  });

  it('displays 9 items in the Elements group', () => {
    elementsPageHelper.verifyElementsGroupItemCount();
  });

  it('displays correct names for each menu item', () => {
    elementsPageHelper.verifyElementMenuLabels();
  });

   it('redirects to Text Box page', () => {
      elementsPageHelper.navigateToElementByIndex(0);
    });

    it('redirects to Check Box page', () => {
      elementsPageHelper.navigateToElementByIndex(1);
    });

    it('redirects to Radio Button page', () => {
      elementsPageHelper.navigateToElementByIndex(2);
    });

    it('redirects to Web Tables page', () => {
      elementsPageHelper.navigateToElementByIndex(3);
    });

    it('redirects to Buttons page', () => {
      elementsPageHelper.navigateToElementByIndex(4);
    });

    it('redirects to Links page', () => {
      elementsPageHelper.navigateToElementByIndex(5);
    });

    it('redirects to Broken Links page', () => {
      elementsPageHelper.navigateToElementByIndex(6);
    });

    it('redirects to Upload and Download page', () => {
      elementsPageHelper.navigateToElementByIndex(7);
    });

    it('redirects to Dynamic Properties page', () => {
      elementsPageHelper.navigateToElementByIndex(8);
    });
});
