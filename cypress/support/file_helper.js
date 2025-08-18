
import * as commonHelper from './common_helper'

export const locators = {
  downloadBtn: '#downloadButton',
  uploadInput: '#uploadFile',
  uploadMessage: '#uploadedFilePath',
  newImageId: 'tempDownloadImage',
  newImage: '#tempDownloadImage'
}

export const testData = {
    fileName: 'sampleFile.jpeg',
    snapshotName: 'sample_file_snapshot.jpeg',
    snapshotPath: 'cypress/snapshots/sample_file_snapshot.jpeg'
  }

export const checkAllElementsExist = () => {
    commonHelper.verifyElementExistence(locators.downloadBtn,true)
    commonHelper.verifyElementExistence(locators.uploadInput,true)
    commonHelper.verifyElementExistence(locators.uploadMessage,false)
} 
  
export const downloadAndCompare = () => {
  // Click download button
  commonHelper.clickOnElement(locators.downloadBtn);

  // Extract base64 data from href attribute
  cy.get(locators.downloadBtn)
    .should('have.attr', 'href')
    .then((href) => {
      const base64Data = href.split(',')[1];
      const imageSrc = `data:image/jpeg;base64,${base64Data}`;

      // Add temp image into DOM
      cy.document().then((doc) => {
        const img = doc.createElement('img');
        img.src = imageSrc;
        img.id = locators.newImageId
        img.style.display = 'block';
        img.style.maxWidth = '500px';
        doc.body.appendChild(img);
      });

      // Ensure image loaded
      cy.get(locators.newImage)
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });

      // Compare with snapshot
      cy.get(locators.newImage).matchImageSnapshot(testData.snapshotName);

      // Cleanup temp image
      cy.get(locators.newImage).then(($img) => $img.remove());
    });
};



export const uploadFileAndCheckPath = () => {
    cy.get(locators.uploadInput).selectFile(testData.snapshotPath, { force: true })
    commonHelper.elementContains(locators.uploadMessage,testData.snapshotName)
}

