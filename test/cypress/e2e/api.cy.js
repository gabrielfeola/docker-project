/// <reference types="cypress" />

describe('API tests', () => {


    it('should verify if application is up', () => {
        cy.request({
            url: 'http://api:8080/read',
            method: 'GET',
        }).its('status').should('be.equal', 200);
    })

    it('should verify application health', () => {
        cy.request({
            url: 'http://api:8080/health',
            method: 'GET',
        }).then(res => {
            cy.wrap(res).its('body.dbState').should('be.equal', 'connected')
            cy.wrap(res).its('body.state').should('be.equal', 'up')
        })
    })

    it('should post product', () => {
        cy.request({
            url: 'http://api:8080/api/produto',
            method: 'POST',
            body: {
                "nome": "Steam Deck",
                "preco": 3000,
                "categoria": "Games"
            }
        }).then(res => {
            cy.wrap(res).its('body.nome').should('be.equal', 'Steam Deck')
            cy.wrap(res).its('body.preco').should('be.equal', 3000)
            cy.wrap(res).its('body.categoria').should('be.equal', 'Games')
        })
    })

    it('should get products', () => {
        cy.request({
            url: 'http://api:8080/api/produto',
            method: 'GET'
        }).then(res => {
            cy.wrap(res).its('status').should('be.equal', 200)
            cy.wrap(res).its('body').should('have.property', "product")
        })

    


    })

    it('should get product by id', () => {
        cy.request({
            url: 'http://api:8080/api/produto',
            method: 'GET'
        }).then(res => {
            cy.request({
                url: `http://api:8080/api/produto/${res.body.product[0]._id}`,
                method: 'GET'
            }).then(res => {
                // assertivas via resposta
                cy.wrap(res).its('body._id').should('be.equal', `${res.body._id}`) 
                cy.wrap(res).its('body.nome').should('be.equal',`${res.body.nome}`)
                cy.wrap(res).its('body.categoria').should('be.equal', `${res.body.categoria}`)
                cy.wrap(res).its('body.preco').should('be.equal', parseInt(`${res.body.preco}`))
                // assertivas fixas
                /* cy.wrap(res).its('body._id').should('be.equal', "64c0df42edb0834ab225c2bc") */
                cy.wrap(res).its('body.nome').should('be.equal', "Steam Deck")
                cy.wrap(res).its('body.categoria').should('be.equal', "Games")
                cy.wrap(res).its('body.preco').should('be.equal', 3000)
            })
        })
    })

    it('should delete product by id', () => {
        cy.request({
            url: 'http://api:8080/api/produto',
            method: 'GET'
        }).then(res => {
            cy.request({
                url: `http://api:8080/api/produto/${res.body.product[0]._id}`,
                method: 'DELETE'
            }).then(res => {
                cy.wrap(res).its('status').should('be.equal', 204)
                cy.wrap(res).its('body').should('be.equal', "")
            })
        })
    })

    it('should fail delete product by id', () => {
        cy.request({
            url: 'http://api:8080/api/produto',
            method: 'GET'
        }).then(res => {
            cy.request({
                url: `http://api:8080/api/produto/1`,
                method: 'DELETE',
                failOnStatusCode: false
            }).then(res => {
                cy.wrap(res).its('status').should('be.equal', 404)
            })
        })
    })

})