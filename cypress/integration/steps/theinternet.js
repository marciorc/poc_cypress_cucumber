/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../support/page_objects/home_page"
import ABTestControlPage from "../../support/page_objects/ab_test_control_page"

const homePage = new HomePage()
const abTestControlPage = new ABTestControlPage()

Given('Eu visite a página The Internet', () => {
  cy.visit('/');
});

When('clicar em AB Test Control', () => {
  homePage.abTestControl();
});

Then('devo visualizar que o header contem {string}', (content) => {
  abTestControlPage.verifyHeader(content);
});