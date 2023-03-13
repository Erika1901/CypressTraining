it('Assertions Demo', () =>{

    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    cy.get('#query-btn')
          .should('contain','Button')
          .and('have.class','query-btn')
          .and('be.visible')
          .and('be.enabled')
          .invoke('attr','id').should('equal','query-btn')
    expect(true).to.be.true
    
    assert.equal(4, 4, 'NOT EQUAL')
   
})