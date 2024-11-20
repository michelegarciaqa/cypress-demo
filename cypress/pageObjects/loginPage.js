import { credentials } from "../data"

export const loginPage = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',

    login() {
        cy.visit('/')
        cy.get(this.usernameInput).type(credentials.username);
        cy.get(this.passwordInput).type(credentials.password);
        cy.get(this.loginButton).click();
        cy.url().should('include', '/inventory');
    }

}