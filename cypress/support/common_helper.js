export const visitPage = (url = '/') => {
    cy.visit(url);
}


export const iterateOnElements = (selector, callback) => {
  cy.get(selector).each(($el, index) => {
    callback($el, index);
  });
};