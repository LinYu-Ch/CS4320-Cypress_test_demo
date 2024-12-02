import FormTestComponent from '../src/components/FormTestComponent'

describe('FormTest Component', () => {
    const testData = { username: 'JohnDoe', data: 'SampleData' };

    it('Submits the form correctly', () => {
        cy.mount(<FormTestComponent testType="correct" />);
        cy.get('input[name="username"]').type(testData.username);
        cy.get('input[name="data"]').type(testData.data);
        cy.contains('Submit').click();
        cy.contains(`Name: ${testData.username}`);
        cy.contains(`Data: ${testData.data}`);
    });

    it('Fails to submit the form due to error logic', () => {
        cy.mount(<FormTestComponent testType="error" />);
        cy.get('input[name="username"]').type(testData.username);
        cy.get('input[name="data"]').type(testData.data);
        cy.contains('Submit').click();
        cy.get('p').should('not.exist'); // Error logic prevents successful form submission
    });
});
