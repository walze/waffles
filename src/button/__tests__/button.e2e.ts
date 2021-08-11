/// <reference types="cypress" />

describe('Button', () => {
  it('basic button', () => {
    cy.visit('stories/basic-button');

    cy.get('button').should('have.length', 1);
  });
});
