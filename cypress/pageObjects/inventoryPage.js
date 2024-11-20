import { credentials } from "../data"

export const inventoryPage = {

    selectToCart: '[data-test="add-to-cart"]',
    selectCart: '[data-test="shopping-cart-link"]',
    checkoutButton: '[data-test="checkout"]',

    selectProdut() {
        cy.contains(credentials.productName).click();
        cy.get(this.selectToCart).click();
        cy.get(this.selectCart).click();
        cy.contains(credentials.cartTittle);
        cy.get(this.checkoutButton).click();
        cy.contains(credentials.checkoutTittle);
    }

}