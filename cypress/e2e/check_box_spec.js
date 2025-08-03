import * as commonHelper from '../support/common_helper.js';
import * as checkBoxHelper from '../support/check_box_helper.js';

describe('Check Box Component', () => {
  beforeEach(() => {
    commonHelper.visitPage('/checkbox');
  });

  it('displays the tree and expand/collapse controls', () => {
    checkBoxHelper.verifyTreeContainerAndButtonsExist();
  });

  it('shows only Home node initially', () => {
    checkBoxHelper.verifyOnlyRootNodeIsVisibleInitially();
  });

  it('no checkboxes should be selected on page load', () => {
    checkBoxHelper.verifyNoCheckboxIsCheckedInitially();
  });

  it('expands all nodes and displays correct tree item labels', () => {
    checkBoxHelper.expandAllAndVerifyTreeLabels();
  });

  it('selects all checkboxes and validates result output', () => {
    checkBoxHelper.checkAllTreeCheckboxes();
    checkBoxHelper.verifyResultOutputAfterSelectingAll();
  });

  it('unselects all checkboxes and verifies none are selected', () => {
    checkBoxHelper.checkAllTreeCheckboxes();
    checkBoxHelper.uncheckAllTreeCheckboxes();
  });

  it('expands Home and checks for Desktop, Documents, Downloads', () => {
    checkBoxHelper.verifyHomeChildren();
  });

  it('expands Desktop and checks for Notes and Commands', () => {
    checkBoxHelper.verifyDesktopChildren();
  });

  it('expands Documents and checks for WorkSpace and Office', () => {
    checkBoxHelper.verifyDocumentsChildren();
  });

  it('expands Documents > WorkSpace and checks React, Angular, Veu', () => {
    checkBoxHelper.verifyWorkSpaceChildren();
  });

  it('expands Documents > Office and checks Public, Private, Classified, General', () => {
    checkBoxHelper.verifyOfficeChildren();
  });

  it('expands Downloads and checks Word File and Excel File', () => {
    checkBoxHelper.verifyDownloadsChildren();
  });
});
