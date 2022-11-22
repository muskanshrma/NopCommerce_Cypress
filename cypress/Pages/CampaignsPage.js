class CampaignsPage{

    promotions = "//p[contains(text(), 'Promotions')]"
    campaigns = "//a[contains(@class,'nav-link')]//p[contains(text(),'Campaigns')]"
    addNew = "//a[contains(@class, 'btn-primary')]"
    name = "//input[@name='Name']"
    subject = "//input[@name='Subject']"
    body = "//textarea[@name='Body']"
    saveButton = "//button[@name='save']"
    
        addNewCampaign(){
        cy.xpath(this.promotions).click({force: true})
        cy.xpath(this.campaigns).click({force: true})
        cy.xpath(this.addNew).click()
        cy.xpath(this.name).type("demo")
        cy.xpath(this.subject).type("demo subject")
        cy.xpath(this.body).type("demo body")
        cy.xpath(this.saveButton).click()
        }
    }
    export default CampaignsPage