#language: pt

@feature-tag
Funcionalidade: The Internet Website

  @first-test
  Cenario: A/B Test Control
    Dado Eu visite a página The Internet
    Quando clicar em AB Test Control
    Entao devo visualizar que o header contem "A/B Test"
