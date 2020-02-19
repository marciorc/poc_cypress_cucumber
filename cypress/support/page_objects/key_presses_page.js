export default class KeyPressesPage {

  pressing_keys(content) {
    cy.get('#target').type(content)
  }

  result_message(content) {
    cy.get('#result').should('have.text', 'You entered: ' + content)
  }

}
