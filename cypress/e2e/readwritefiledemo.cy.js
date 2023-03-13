/// <reference types="cypress"/>

it ('Read files using Fixture', ()=>{

    cy.fixture('example.json').then((data) =>{
    
        cy.log(data.name)
        cy.log(data.email)
    })


})

it ('Read file using readFile()',()=>{

    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})

it('Write file demo', ()=>{
    cy.writeFile('sample.txt', 'Hello, I am Erika\n')

    cy.writeFile('sample.txt', 'I am learning cypress', {flag:'a+'})
})

it('Write file demo', ()=>{
    cy.writeFile('./cypress/fixtures/files/sample2.txt', 'Hello, I am Erika')

})