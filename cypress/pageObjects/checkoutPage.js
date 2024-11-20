import { credentials } from "../data"

export const checkoutPage = {

    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    zipCode: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    finishButton: '[data-test="finish"]',

    fillInformation() {
        cy.get(this.firstName).type(credentials.firstName),
            cy.get(this.lastName).type(credentials.lastName),
            cy.get(this.zipCode).type(credentials.zipCode),
            cy.get(this.continueButton).click();
        cy.contains(credentials.productName);
        cy.get(this.finishButton).click();
        cy.contains(credentials.orderPlaceText);
    }

}