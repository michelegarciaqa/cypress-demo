import { credentials } from "../data"
import { loginPage } from "../pageObjects/loginPage"
import { inventoryPage } from "../pageObjects/inventoryPage";
import { checkoutPage } from "../pageObjects/checkoutPage";

describe('cypress demo', () => {
  it('placing order', () => {
    loginPage.login(credentials.username, credentials.password);
    inventoryPage.selectProdut(credentials.productName);
    checkoutPage.fillInformation(credentials.firstName, credentials.lastName, credentials.zipCode);
  })
})