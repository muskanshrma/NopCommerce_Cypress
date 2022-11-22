import CampaignsPage from "../../Pages/CampaignsPage"

const campaignsPage = new CampaignsPage()

it('Adding new campaign', function () {
    cy.login()
    campaignsPage.addNewCampaign()
    cy.logout()
})