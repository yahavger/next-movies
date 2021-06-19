describe('Search card by rating on board', () => {
  const searchInput = '#app .movies-page .search-by .search-input';
  const previewDetailedSection = '#app .vm--modal .detailed-preview .details-section'
  beforeEach(function(){
    window.console.log('Enter the beforeEach function')
    cy.visit('/');
    //clear select
    cy.get(searchInput).clear();
    // select rating
    cy.get('#app .movies-page .search-by .v-select .vs__actions').click();
    cy.get('#app .movies-page .search-by .v-select li:nth-child(2)').click();
  });
  it('should have 2 movies with 8.2 rating', () => {
    cy.get(searchInput).type('8.2');
    cy.get('#app .movies-page .movies-grid > ul > li')
      .should('have.length', 2);
  });
  it('should open preview of one of the last result - search rating 8.2', () => {
    cy.get(searchInput).type('8.2');
    cy.get('#app .movies-page .movies-grid > ul >li:last-child .name-text').invoke('text').then(cardMovieName => {
      const _cardMovieName = cardMovieName;
      // invoke preview
      cy.get('#app .movies-page .movies-grid > ul >li:last-child .more > button').click()
      // invoke preview name
      cy.get(`${previewDetailedSection} .title-section`).invoke('text').then((previewCardName) => {
        //check if card name equal to preview name;
        expect(previewCardName.trim()).equal(_cardMovieName)
      })
    });
  });
});
