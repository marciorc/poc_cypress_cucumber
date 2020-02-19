/// <reference types="Cypress" />
/* global Given, When, Then */

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../support/page_objects/home_page"
import ABTestControlPage from "../../support/page_objects/ab_test_control_page"
import KeyPressesPage from "../../support/page_objects/key_presses_page"

const homePage = new HomePage()
const abTestControlPage = new ABTestControlPage()
const keyPressesPage = new KeyPressesPage()

Given('Eu visite a página The Internet', () => {
  cy.visit('/')
})

When('clicar em AB Test Control', () => {
  homePage.abTestControl()
})

Then('devo visualizar que o header contem {string}', (content) => {
  abTestControlPage.verifyHeader(content)
})

When('clicar em Key Presses', () => {
  homePage.keyPresses()
})

And('pressiona a tecla {string}', (content) => {
  keyPressesPage.pressing_keys(content)
})

Then('devo visualizar a mensagem com a tecla pressionada {string}', (content) => {
  keyPressesPage.result_message(content)
})