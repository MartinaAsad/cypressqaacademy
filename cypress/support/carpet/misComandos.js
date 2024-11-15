Cypress.Commands.add('login2', (user, password) => {
    //lo que quiero que haga esa funcion
    cy.get('input[name="username"]').type(user);
        cy.get('input[name="password"]').type(password);
  })