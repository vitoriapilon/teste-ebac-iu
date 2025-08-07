class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
      cy.get('[type="text"]').eq(1).type(nomeProduto)
      cy.get('.button-search').eq(1).click()
    }
 
    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()

    }

    visitarProduto() {

    }

    addProdutoCarrinho() {

    }
}

export default new ProdutosPage()