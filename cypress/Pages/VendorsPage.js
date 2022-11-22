class VendorsPage {

    customers = "(//p[contains(text(), 'Customers')])[1]"
    vendor = "//ul[contains(@class,'nav-treeview')]//p[contains(text(),'Vendors')]"
    vendorName = "//input[@name='SearchName']"
    email = "//input[@name='SearchEmail']"
    searchButton = "//button[contains(@class, 'btn-search')]"

    searchVendor() {
        cy.xpath(this.customers).click({ force: true })
        cy.xpath(this.vendor).click({ force: true })
        cy.xpath(this.vendorName).type("Vendor 1")
        cy.xpath(this.emial).type("vendor1email@gmail.com")
        cy.xpath(this.searchButton).click()
    }
}
export default VendorsPage