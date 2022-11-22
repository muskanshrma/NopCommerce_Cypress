import CustomersPage from "../../Pages/CustomersPage"

const customersPage = new CustomersPage()

it('Search customer', function () {
    cy.login()
    customersPage.searchCustomer()
    cy.logout()
})