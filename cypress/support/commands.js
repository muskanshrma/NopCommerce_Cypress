import Homepage from "../Pages/Homepage"

const homePage = new Homepage()

Cypress.Commands.add("login", () => {
    const url = "https://admin-demo.nopcommerce.com"
    homePage.navigate(url)
    homePage.clickLoginButton()
})

Cypress.Commands.add("logout", function(){
    homePage.logout()
})