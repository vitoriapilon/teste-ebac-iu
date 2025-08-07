///<reference types="cypress"/>
const perfil = require ('../../fixtures/perfil.json')


describe('Funcionalidade: Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

//afterEach(() => {
   // cy.screenshot()
//});

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('vvpilon@gmail.com')
        cy.get('#password').type('testeEBAC123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vvpilon (não é vvpilon? Sair)')
    })

it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('invalido@gmail.com')
        cy.get('#password').type('testeEBAC123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.' )
        cy.get('.woocommerce-error').should('exist')
});

it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('vvpilon@gmail.com')
        cy.get('#password').type('testeEBAC')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail vvpilon@gmail.com está incorreta. Perdeu a senha?' )
        cy.get('.woocommerce-error').should('exist')
});

it('Deve fazer login com sucesso usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vvpilon (não é vvpilon? Sair)')
});

it('Deve fazer login com sucesso usando fixture', () => {
    cy.fixture('perfil').then( dados =>{
        cy.get('#username').type(dados.usuario , {log: false })
        cy.get('#password').type(dados.senha , {log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vvpilon (não é vvpilon? Sair)')
        
    })
});

it.only('Deve fazer login com sucesso - usando comandos customizado', () => {
    cy.login('vvpilon@gmail.com', 'testeEBAC123')
     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vvpilon (não é vvpilon? Sair)')
});

})