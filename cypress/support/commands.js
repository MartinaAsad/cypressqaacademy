// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('loginPrueba', (user, password) => {
    //lo que quiero que haga esa funcion
    cy.get('input[name="username"]').type(user);
        cy.get('input[name="password"]').type(password);
  })

  Cypress.Commands.add('ingresarPagina', () => {
    //lo que quiero que haga esa funcion
    cy.visit('https://automationintesting.online/');
  })

  Cypress.Commands.add('contieneElemento', (posicion, texto) => {
    //lo que quiero que haga esa funcion
    cy.get(`#root > div:nth-child(2) > div > div.row.contact > div:nth-child(3) > p:nth-child(${posicion})`)
      .contains(texto)
  })

  Cypress.Commands.add('alMenosUnaImagen', () => {
    //lo que quiero que haga esa funcion
    cy.get("div:nth-child(2) > div > div:nth-child(1) > div > img").then(($hotel)=>{
      const isNotVisible=!$hotel.is("visible");//inicializado en falso
      
      if(isNotVisible){//negar lo falso= cambia a verdadero
        cy.get("div:nth-child(2) > div > div:nth-child(4) > div > div > div.col-sm-3 > img").should('be.visible');
      }
      /*else{
        cy.get("div:nth-child(2) > div > div:nth-child(4) > div > div > div.col-sm-3 > img").should('be.visible');
      }*/
    })
  })

  Cypress.Commands.add('chequearDescripcion', (texto) => {
    //lo que quiero que haga esa funcion
    cy.get("div:nth-child(2) > div > div.row.hotel-description > div.col-sm-10 > p")
      .contains(texto)
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })