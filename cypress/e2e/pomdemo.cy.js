import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Test', () =>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      
    })

    it('Login with valid credentials', () =>{
       
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Dashboard').should('be.visible')
    
    })
    
    it('Login with invalid email', () =>{
    
        loginPage.enterUsername('malika')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.contains('Dashboard').should('be.visible')
    
    
    })

})

it('Login with invalid password', () =>{
    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin')
    loginPage.clickLogin()
    cy.contains('Dashboard').should('be.visible')

})

