describe('Styleguide', () => {
	it('should navigate to the styleguide by clicking Styledguide button on a Home page', () => {
		cy.visit('/');

		cy.get('a').click();

		cy.url().should('include', '/styleguide');
	});

	it('should increment count by click plus button', () => {
		cy.visit('/styleguide');

		cy.get('[data-testid="increment"]').click();
		cy.get('[data-testid="increment"]').click();
		cy.get('[data-testid="decrement"]').click();
		cy.get('[data-testid="count"]').contains('1');
	});
});
