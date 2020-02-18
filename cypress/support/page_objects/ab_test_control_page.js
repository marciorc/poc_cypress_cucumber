export default class ABTestControlPage {

  verifyHeader(content) {
    cy.get('h3').should('contain',content)
  }

}