import ComponentLoadTestComponent from '../../src/components/ComponentLoadTestComponent'

describe('ComponentLoadTest Component', () => {
    it('Loads the component correctly', () => {
        cy.mount(<ComponentLoadTestComponent testType="correct" />);
        cy.contains('Load Component').click();
        cy.contains('this is a test component');
    });

    it('Fails to load the component due to error logic', () => {
        cy.mount(<ComponentLoadTestComponent testType="error" />);
        cy.contains('Load Component').click();
        cy.contains('this is a test component').should('not.exist'); // Component does not load
    });
});
