describe('Search movie by title on board', () => {
  const searchInput = '#app .movies-page .search-by .search-input';
  const previewDetailedSection = '#app .vm--modal .detailed-preview .details-section'
  beforeEach(function(){
    window.console.log('Enter the beforeEach function')
    cy.visit('/');
    cy.get('#app .movies-page .search-by .search-input').clear();
  });
  it('should present page search component ', () => {
    cy.get('#app .movies-page .search-by .label').contains('Search By')
    cy.get('#app .movies-page .search-by .v-select').should('exist')
    cy.get(searchInput).should('exist')
  });
  it('should have 1 specific movie by title', () => {
    // title is the default type selection.
    cy.get(searchInput).type('2001: A Space Odyssey');
    cy.get('#app .movies-page .movies-grid > ul > li')
      .should('have.length', 1);
  });
  it('should have 3 movies that contains title - term "ace"', () => {
    // title is the default type selection.
    cy.get(searchInput).type('ace');
    cy.get('#app .movies-page .movies-grid > ul > li')
      .should('have.length', 3);
  });
  it('should open preview of one of the last result - "search ace"', () => {
    cy.get(searchInput).type('ace');
    cy.get('#app .movies-page .movies-grid > ul >li:last-child .tile .name-text').invoke('text').then(movieName => {
      const _movieName = movieName;
      // invoke preview
      cy.get('#app .movies-page .movies-grid > ul >li:last-child .tile .more > button').click()
      // invoke preview name
      cy.get(`${previewDetailedSection} .title-section .wrapper .title`).invoke('text').then((previewName) => {
        //check if card name equal to preview name;
        expect(previewName.trim()).equal(_movieName)
      })
    });
  });
});
