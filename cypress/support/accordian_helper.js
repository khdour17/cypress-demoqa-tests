import * as commonHelper from '../support/common_helper.js'

export const locators = {
  section1Header: '#section1Heading',
  section1Content: '#section1Content',
  section2Header: '#section2Heading',
  section2Content: '#section2Content',
  section3Header: '#section3Heading',
  section3Content: '#section3Content',
}


export const testData = [
    {
        header: locators.section1Header,
        content: locators.section1Content,
        expectedHeader: 'What is Lorem Ipsum?',
        expectedContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        header: locators.section2Header,
        content: locators.section2Content,
        expectedHeader: 'Where does it come from?',
        expectedContent: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32." 
    },
    {
        header: locators.section3Header,
        content: locators.section3Content,
        expectedHeader: 'Why do we use it?',
        expectedContent: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."    
    }
]

export const verifyAllElementsExist = () => {
  commonHelper.verifyElementExistence(locators.section1Header, true)
  commonHelper.verifyElementExistence(locators.section2Header, true)
  commonHelper.verifyElementExistence(locators.section3Header, true)
}

export const verifyDefaultState = () => {
  // Section 1 should be open by default
  commonHelper.verifyVisibility(locators.section1Content, true)
  // Section 2 and 3 should be collapsed
  commonHelper.verifyVisibility(locators.section2Content, false)
  commonHelper.verifyVisibility(locators.section3Content, false)
}

export const expandAndVerifySection = (section) => {
    cy.get(section.content).then($el => {
    if ($el.is(':visible')) {
      // Already expanded, just verify content
      commonHelper.verifyVisibility(section.header,true)
      commonHelper.elementContains(section.content,section.expectedContent)
    } else {
      // Expand then verify
      commonHelper.clickOnElement(section.header)
      commonHelper.elementContains(section.content,section.expectedContent)
    }
  })
}

export const verifySingleExpandBehavior = () => {
  // Open section 2 → section 1 should close
  commonHelper.clickOnElement(locators.section2Header)
  commonHelper.verifyVisibility(locators.section2Content, true)
  commonHelper.verifyVisibility(locators.section1Content, false)

  // Open section 3 → section 2 should close
  commonHelper.clickOnElement(locators.section3Header)
  commonHelper.verifyVisibility(locators.section3Content, true)
  commonHelper.verifyVisibility(locators.section2Content, false)
}
