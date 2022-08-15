describe('Card', () => {
  it('renders content correctly', () => {
    cy.loadStory('card-basic');
    cy.get('section').should('have.length', 1);
    cy.findByText('Basic Card').should('exist');
    cy.findByText(/lorem ipsum/i).should('exist');
  });

  it('renders headstone, and content', () => {
    cy.loadStory('card-with-headstone');
    cy.findByTestId('card-headstone').should('exist');
    cy.findByText('Card with Headstone').should('exist');
    cy.findByText(/lorem ipsum/i).should('exist');
  });

  it('renders as a link', () => {
    cy.loadStory('card-as-link');
    cy.get('a')
      .should('have.length', 1)
      .and('have.attr', 'href')
      .and('include', 'https://datacamp.com');
    cy.findByText('Card as Link').should('exist');
  });

  it('renders focus state as a link', () => {
    cy.loadStory('card-as-link');
    cy.get('a').focus();
    cy.findByText('Card as Link').should('exist');
  });
});