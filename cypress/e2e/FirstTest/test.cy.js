
describe('First Test', ()=>{
//aca van los contenedores de las pruebas
beforeEach('should visit the page',()=>{
    cy.visit('https://google.com.ar/');
});//prueba

it('should find the title',()=>{
    cy.get('img').should('be.visible');
    cy.get('textarea').eq('0').type('First test');
    
})

});