import ButtonTestComponent from '../../src/components/ButtonTestComponent'

describe('ButtonTest Component', () => {
  it('Increments Counter', () => {
      cy.mount(<ButtonTestComponent testType="correct" />);
      cy.contains('Increment Counter').click();
      cy.contains('Counter: 1');
  });

  it('Does Not Decrement Counter Below 0', () => {
      cy.mount(<ButtonTestComponent testType="error" />);
      cy.contains('Decrement Counter').click();
      cy.contains('Counter: -1'); // Fail case
  });
});