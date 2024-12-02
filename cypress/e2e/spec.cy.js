describe('Test Website Home Page', () => {
  beforeEach(() => {
      cy.visit('');
  })

  // Test the button click functionality
  describe('Button Click Tests', () => {
      it('Increments Counter', () => {
          cy.get('[data-cytest="correct1"]').within(() => {
              cy.get('button').click();
              cy.get('p').should('contain', 'Counter: 1');
          });
      });

      it('Decrements Counter with Error Logic', () => {
          cy.get('[data-cytest="error1"]').within(() => {
              cy.get('button').click();
              // Test failure logic: Counter should still be 0
              cy.get('p').should('contain', 'Counter: 0');
          });
      });
  });

  // Test form submission functionality
  describe('Form Submission Tests', () => {
      const testData = { username: "JohnDoe", data: "SampleData" };

      it('Submits Correct Form', () => {
          cy.get('[data-cytest="correct2"]').within(() => {
              cy.get('#fusername').type(testData.username);
              cy.get('#fdata').type(testData.data);
              cy.get('input[type="submit"]').click();
              cy.get('p').should('contain', `Name: ${testData.username}`);
              cy.get('p').should('contain', `Data: ${testData.data}`);
          });
      });

      it('Submits Broken Form', () => {
          cy.get('[data-cytest="error2"]').within(() => {
              cy.get('#ffusername').type(testData.username);
              cy.get('#ffdata').type(testData.data);
              cy.get('input[type="submit"]').click();
              // Test failure logic: Form should not submit successfully
              cy.get('p').should('not.exist');
          });
      });
  });

  // Test redirect links
  describe('Redirect Link Tests', () => {
      it('Navigates Correctly with Valid Link', () => {
          cy.get('[data-cytest="correct3"]').within(() => {
              cy.get('a').click();
              cy.url().should('include', '/TestRoute');
          });
      });

      it('Fails to Navigate with Broken Link', () => {
          cy.get('[data-cytest="error3"]').within(() => {
              cy.get('a').click();
              // Test failure: Should not navigate to the correct route
              cy.url().should('not.include', '/TestRoute');
          });
      });
  });

  // Test component rendering functionality
  describe('Component Load Tests', () => {
      it('Loads Component Correctly', () => {
          cy.get('[data-cytest="correct4"]').within(() => {
              cy.get('button').click();
              cy.get('div').should('contain', 'this is a test component');
          });
      });

      it('Fails to Load Component with Error Logic', () => {
          cy.get('[data-cytest="error4"]').within(() => {
              cy.get('button').click();
              // Test failure: Component should not load
              cy.get('div').should('not.contain', 'this is a test component');
          });
      });
  });

  // Test API call functionality
  describe('API Call Tests', () => {
      it('Makes a Successful API Call', () => {
          cy.get('[data-cytest="correct5"]').within(() => {
              cy.get('button').click();
              cy.get('p').should('contain', '"title":"delectus aut autem"'); // Verify correct data
          });
      });

      it('Fails to Make an API Call', () => {
          cy.get('[data-cytest="error5"]').within(() => {
              cy.get('button').click();
              // Test failure: Error message should be displayed
              cy.get('p').should('contain', 'Error: Network response was not ok');
          });
      });
  });
});
