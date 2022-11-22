class Homepage {

    loginButton = "//button[@type='submit']"
    logoutButton = "//a[contains(text(), 'Logout')]"

    navigate() {
        cy.visit('https://admin-demo.nopcommerce.com')
    }
    clickLoginButton() {
        cy.xpath(this.loginButton).click()
    }
    logout() {
        cy.xpath(this.logoutButton).click()
    }
}
export default Homepage