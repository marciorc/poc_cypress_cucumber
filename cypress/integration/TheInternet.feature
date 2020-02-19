#language: pt

@feature-tag
Funcionalidade: The Internet Website
  Alguns testes no site The Internet

  @first-test
  Cenario: A/B Test Control
    Dado Eu visite a página The Internet
    Quando clicar em AB Test Control
    Entao devo visualizar que o header contem "A/B Test"

  Esquema do Cenario: Key Presses
    Dado Eu visite a página The Internet
    Quando clicar em Key Presses
    E pressiona a tecla "<tecla>"
    Entao devo visualizar a mensagem com a tecla pressionada "<tecla>"

    Exemplos:
      | tecla |
      | A     |
      | B     |
      | C     |