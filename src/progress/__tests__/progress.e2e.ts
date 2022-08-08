describe('Progress', () => {
  it('renders a basic progress', () => {
    cy.loadStory('progress-basic');
    cy.findByTestId('progress-wrapper').should('exist');
  });

  it('renders progress with steps', () => {
    cy.loadStory('progress-steps');
    cy.findByTestId('progress-wrapper').should('exist');
  });

  it('renders progress in different sizes', () => {
    cy.loadStory('progress-sizes');
    cy.findAllByTestId('progress-wrapper').should('have.length', 4);
  });

  it('renders inverted progress', () => {
    cy.loadStory('progress-inverted');
    cy.findByTestId('progress-wrapper').should('exist');
  });
});
