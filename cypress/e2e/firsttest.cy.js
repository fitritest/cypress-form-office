describe('My First Test', () => 
{
  it('check form', () => 
  {
    //check title
    cy.visit("https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u")
    cy.title().should('eq','Review our product')

    //check full name
    cy.get('#QuestionId_r9f62b2a1fbe746ab953326f6937d4e73 > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content')
    cy.get(':nth-child(1) > .-co-46 > .-a-50 > .-iR-61 > .-_F-60').type("test testing")

    //check phone number
    cy.get('#QuestionId_r5c2dd5cf6732459894e3d1cb504c8110 > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content')
    cy.get(':nth-child(2) > .-co-46 > .-a-50 > .-iR-61 > .-_F-60').type("08123456789")

    //select product or service
    cy.get('#QuestionId_r8bc17b753f0048ecb03794ef45037bb7 > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content > span')
    cy.get('#QuestionChoiceOption1').click()

    //rate star review
    cy.get('#QuestionId_r9f97f2550332479a8fdd2914bd99bc1d > .--d-51')
    cy.get('.-io-88').click()

    //select date
    cy.get('#QuestionId_r1abee94394494318b1e34a419838e56c > .--d-51 > .-h-52 > [aria-level="2"] > .text-format-content')
    cy.get('#DatePicker0-label').click()

    //click submit
    cy.get('.css-279').click()
  })
})