import RedirectTestComponent from '../../src/components/RedirectTestComponent'
import { MemoryRouter } from 'react-router-dom';

describe('RedirectTest Component', () => {
    it('Redirects correctly to the valid route', () => {
        cy.mount(
            <MemoryRouter>
                <RedirectTestComponent testType="correct" />
            </MemoryRouter>
        );
        cy.contains('Redirect Test').click();
        cy.location('pathname').should('eq', '/TestRoute');
    });

    it('Fails to redirect to the invalid route', () => {
        cy.mount(
            <MemoryRouter>
                <RedirectTestComponent testType="error" />
            </MemoryRouter>
        );
        cy.contains('Redirect Test').click();
        cy.location('pathname').should('not.eq', '/TestRoute');
    });
});
