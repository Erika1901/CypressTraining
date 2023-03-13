// <reference type ="cypress"/>

it ('Google Search', () => {

    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Automation Step by Step{Enter}')

    //cy.get('.FPdoLc > center > .gNO89b').click()
    //cy.contains('Recherche Google').click()

    cy.wait(2000)
    cy.contains('Vidéos').click()

})