describe('Pagina Automation Testing', {testisolation:false},()=>{
    beforeEach('Visitar la pagina',()=>{//sntes de cada itr
        cy.ingresarPagina();
    });
    //punto 1
    it ('Verificar lo que esta en la casita',()=>{
        cy.contieneElemento(1, "Shady Meadows B&B");
    });

    it ('Verificar direccion',()=>{
        cy.contieneElemento(2, "The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S");
    });

    it ('Verificar telefono',()=>{
        cy.contieneElemento(3, "012345678901");
    });

    it ('Verificar email',()=>{
        cy.contieneElemento(4, "fake@fakeemail.com");
    });

    //punto 2
    it ('Mostrar al menos 1 imagen',()=>{
        cy.alMenosUnaImagen();
    });

    //punto 3 
    it ('Chequear texto de la descripcion',()=>{
        cy.chequearDescripcion("Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.");
    });



});