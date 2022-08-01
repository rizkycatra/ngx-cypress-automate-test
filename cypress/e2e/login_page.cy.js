/// <reference types="Cypress" />

//const { get } = require("core-js/core/dict")

describe('Login Page', () => {

    it('Login Text Verified', () => {
        cy.visit('/')
        cy.contains('[class="btn home"]','Home')
        cy.contains('.mainHeading','XYZ Bank')
        




    })

})