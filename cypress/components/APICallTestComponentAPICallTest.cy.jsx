import APICallTestComponent from '../../src/components/APICallTestComponent'

describe('APICallTest Component', () => {
    it('Makes a successful API call', () => {
        cy.mount(<APICallTestComponent testType="correct" />);
        cy.contains('Make API Call').click();
        cy.contains('"title":"delectus aut autem"');
    });

    it('Fails to make an API call due to error logic', () => {
        cy.mount(<APICallTestComponent testType="error" />);
        cy.contains('Make Broken API Call').click();
        cy.contains('"title":"delectus aut autem"'); 
    });
});
