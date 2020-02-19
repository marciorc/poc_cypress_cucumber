export default class HomePage {

  verifyTitle() {
    cy.get('title').should('have.text','The Internet')
  }

  abTestControl() {
    cy.get('[href="/abtest"]').should('have.text', 'A/B Testing').click()
  }

  keyPresses() {
    cy.get('[href="/key_presses"]').should('have.text', 'Key Presses').click()
  }

}