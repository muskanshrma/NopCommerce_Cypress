class DiscountsPage {

    promotions = "//p[contains(text(), 'Promotions')]"
    discounts = "//a[contains(@class,'nav-link')]//p[contains(text(),'Discounts')]"
    addNew = "//a[contains(@class, 'btn-primary')]"
    name = "//input[@name='Name']"
    saveButton = "//button[@name='save']"

    addNewDiscount() {
        cy.xpath(this.promotions).click({ force: true })
        cy.xpath(this.discounts).click({ force: true })
        cy.xpath(this.addNew).click()
        cy.xpath(this.name).type("demo")
        cy.xpath(this.saveButton).click()
    }
}
export default DiscountsPage