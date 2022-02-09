describe('Nartefacts', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:3000');
    cy.contains('COLORS INSPIRED BY AFRICAN MUSIC.');
  });

  it('user can navigate to likes page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('YOUR LIKES').click();
    cy.url().should('include', '/likes');
    cy.contains('YOUR LIKES');
  });
});
