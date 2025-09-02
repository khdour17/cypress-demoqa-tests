
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
  commonHelper.clickOnElement(locators.downloadBtn)

  // Get base64 href and add temp image to DOM
  cy.get(locators.downloadBtn)
    .should('have.attr', 'href')
    .then((href) => {
      const base64Data = href.split(',')[1]
      const imageSrc = `data:image/jpeg;base64,${base64Data}`

      cy.document().then((doc) => {
        const img = doc.createElement('img')
        img.src = imageSrc
        img.id = locators.newImageId
        img.style.display = 'block'
        doc.body.appendChild(img)
      })

      // Wait for image to load
      cy.get(locators.newImage)
        .should('be.visible')
        .should(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0)
        })

      // Use .toMatchImageSnapshot for visual comparison
      cy.get(locators.newImage).matchImageSnapshot(testData.snapshotName,{
        failureThreshold: 0,
        failureThresholdType: 'pixel',
        customDiffConfig: { threshold: 0.0 }
      })

      // Cleanup
      cy.get(locators.newImage).then(($img) => $img.remove())
    })
}

export const uploadFileAndCheckPath = () => {
    commonHelper.uploadFile(locators.uploadInput,testData.snapshotPath)
    commonHelper.elementContains(locators.uploadMessage,testData.snapshotName)
}

