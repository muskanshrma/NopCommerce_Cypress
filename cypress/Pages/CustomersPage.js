class CustomersPage{

    customers = "(//p[contains(text(), 'Customers')])[1]"
    customersDropdown = "(//a[contains(@class,'nav-link')]//p[contains(text(),' Customers')])[1]"
    email = "//input[@name='SearchEmail']"
    searchButton = "//button[contains(@class, 'btn-search')]"
    
        searchCustomer(){
        cy.xpath(this.customers).click({force: true})
        cy.xpath(this.customersDropdown).click({force: true})
        cy.xpath(this.email).type("victoria_victoria@nopCommerce.com")
        cy.xpath(this.searchButton).click()
        }
    }
    export default CustomersPage