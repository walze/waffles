describe('Progress', () => {
  it('renders a basic progress bar', () => {
    cy.loadStory('progress-basic');
    cy.findByTestId('progress-wrapper').should('exist');
  });

  it('renders inverted progress bar', () => {
    cy.loadStory('progress-inverted');
    cy.findByTestId('progress-wrapper').should('exist');
  });
});
