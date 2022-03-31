describe('Styleguide', () => {
	it('should navigate to the styleguide by clicking Styledguide button on a Home page', () => {
		cy.visit('/');

		cy.get('a').click();

		cy.url().should('include', '/styleguide');
	});
});
