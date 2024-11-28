describe('Test Website Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  describe('Button click tests', ()=>{
    it('Clicks Increment Button', () => {
      cy.get('[data-cytest="correct1"]').within(() => {
        cy.get('button').click();
        cy.get('p').should("contain", "counter: 1");
      })
      
    });
    
    it('Clicks Decrement Button', () => {
      cy.get('[data-cytest="error1"]').within(() => {
        cy.get('button').click();
        cy.get('p').should("contain", "counter: 0");
      })
    });
  });

  describe('form submission tests', () => {
    let myUsername = "John";
    let myData = "123";

    it('Interacts with first submission form', () => {
      cy.get('[data-cytest="correct2"]').within(() => {
        cy.get('input#fusername').type(myUsername);
        cy.get('input#fdata').type(myData);
        cy.contains("Submit").click();

        cy.get('p').should('have.text', `name: ${myUsername}data: ${myData}`);
      })
    });

    it('Interacts with second submission form', () => {
      cy.get('[data-cytest="error2"]').within(() => {
        cy.get('input#ffusername').type(myUsername);
        cy.get('input#ffdata').type(myData);
        cy.contains("Submit").click();

        cy.get('p').should('have.text', `name: ${myUsername}data: ${myData}`);
        
      });
    });
  });

  describe('redirect link tests', ()=>{
    it('Clicks first redirect link', () => {
      cy.get('[data-cytest="correct3"]').within(()=>{
        cy.get('a').click();
        cy.url().should('eq', 'http://localhost:5173/TestRoute');
      });
    });
    
    it('Clicks second redirect link', () => {
      cy.get('[data-cytest="error3"]').within(()=>{
        cy.get('a').click();
        cy.url().should('eq', 'http://localhost:5173/TestRoute');
      });
    });
  })

  describe('component load test', ()=>{

    it('Clicks first "Load Component" button', () => {
      cy.get('[data-cytest="correct4"]').within(()=>{
        cy.get('button').click();
        cy.get('div').should('contain', 'this is a test component');
      });
    });
    
    it('Clicks second "Load Component" button', () => {
      cy.get('[data-cytest="error4"]').within(()=>{
        cy.get('button').click();
        cy.get('div').should('contain', 'this is a test component');
      });
    });
  });

  describe('API call tests', () => {
    it('Clicks first API call button', () => {
      cy.get('[data-cytest="correct5"]').within(()=>{
        cy.get('button').click();
        cy.get('p').should('contain', 'data: {"userId":1,"id":1,"title":"delectus aut autem","completed":false}');
      });

    });
    
    it('Clicks second API call button', () => {
      cy.get('[data-cytest="error5"]').within(()=>{
        cy.get('button').click();
        cy.get('p').should('contain', 'data: {"userId":1,"id":1,"title":"delectus aut autem","completed":false}');
      });
    });
    
  })

})