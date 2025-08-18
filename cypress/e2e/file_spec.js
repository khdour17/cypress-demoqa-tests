import * as commonHelper from '../support/common_helper.js'
import * as fileHelper from '../support/file_helper.js'

describe('File Upload & Download Tests', () => {

  beforeEach(() => {
    commonHelper.visitPage('/upload-download')
  })

  it('Check all page elements exist', () => {
    fileHelper.checkAllElementsExist()
  })

  it('Download file and compare with snapshot', () => {
    fileHelper.downloadAndCompare()
  })

  it('Upload file and verify uploaded path', () => {
    fileHelper.uploadFileAndCheckPath()
  })
})
