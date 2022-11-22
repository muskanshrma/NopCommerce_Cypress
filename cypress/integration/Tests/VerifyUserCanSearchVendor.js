import VendorsPage from "../../Pages/VendorsPage"

const vendorsPage = new VendorsPage()

it('Search customer', function () {
    cy.login()
    vendorsPage.searchVendor()
    cy.logout()
})