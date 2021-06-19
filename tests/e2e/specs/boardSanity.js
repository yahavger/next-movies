describe('Movies board sanity', () => {
  const searchInput = '#app .movies-page .search-by .search-input';
  it('should redirect from / to /next-movies', () => {
    cy.visit('/');
    cy.url().should('include', '/next-movies');
  });
  it('should present next logo', () => {
    cy.get('#app .movies-page .header-image')
      .should('exist')
  });
  it('should present page title', () => {
    cy.get('#app .movies-page .title').contains('EXPLORE YOUR NEXT')
  });
  it('should present page search component ', () => {
    cy.get('#app .movies-page .search-by .label').contains('Search By')
    cy.get('#app .movies-page .search-by .v-select').should('exist')
    cy.get(searchInput).should('exist')
  });
  it('list should contain 100 cards', () => {
    cy.get('#app .movies-page .movies-grid > ul > li')
      .should('have.length', 100);
  });
  it('should contain cards each with title', () => {
    cy.get('#app .movies-page .movies-grid > ul > li').each(($el) => {
      expect(cy.wrap($el).find('.name'))
    });
  });
});
