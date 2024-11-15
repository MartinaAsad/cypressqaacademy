
describe('First Test', {testisolation:false},()=>{
    //aca van los contenedores de las pruebas
    beforeEach('should visit the page',()=>{//sntes de cada itr
        cy.clearCookies();
        cy.log('algooo');
    });
    it('test login',()=>{
        const usuario='Admin';
        const clave='admin123';
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //});//prueba
        cy.get('.oxd-text--h5').contains('Login');
        cy.get('.oxd-sheet > :nth-child(2)').contains('Password : admin123');
        cy.loginPrueba(usuario, clave);
        cy.get('.oxd-button').click();
        cy.wait(2000);
    });

    it ('test login with wrong password', ()=>{
        //cy.get('h6').contains('Dashboard');
        cy.get('.oxd-userdropdown-tab').click();
        cy.get('.oxd-userdropdown-link').contains('Logout').click();
    });
});