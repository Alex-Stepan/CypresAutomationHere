/// <reference types="cypress" />

describe('Find or Get Elements by using Different Locators', () => {
    beforeEach(() => {
        //runs before each test
        cy.clearCookies();
        cy.visit('/login');
    });

    it('Check different locators strategy', () => {
        //By CSS locators
        cy.get("input[name='username']").clear(); //[creates an object].[operation to the object]
        cy.get("input[name='username']").type("CydeoStudent");
        cy.get("input[name='username']").clear();

        cy.get("input[name='password']").clear();
        cy.get("input[name='password']").type("CydeoPassword");
        cy.get("input[name='password']").clear();

        //for multiple locators:
        //using each loop:

        //cy.get("input").each((item, index, list))   //[creates object].[object parameters: item, index, list]
        cy.get("input").each((item, index, list) => {
            //assert the length is 2
            expect(list).to.have.length(2);
            //assert the item has attribute
            expect(item).to.have.attr("type");
        }) 

        //locate by attribute
        cy.get('[type');

        //locate by class Name
        cy.get('.btn.btn-primary'); //add a dot in the beginning [btn btn-primary] and for each space char

        //locate by id
        cy.get('#wooden_spoon');

        //locate by text
        cy.get('button').should('contain', 'Login').click(); //identify the attribute, then assert if it contain this text









    });

});