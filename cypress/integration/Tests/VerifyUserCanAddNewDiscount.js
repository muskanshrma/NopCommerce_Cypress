import DiscountsPage from "../../Pages/DiscountsPage"

const discountsPage = new DiscountsPage()

it('Adding new disount', function () {
    cy.login()
    discountsPage.addNewDiscount()
    cy.logout()
})