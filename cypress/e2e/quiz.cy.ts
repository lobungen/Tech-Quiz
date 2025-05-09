//import { mockState } from '../support/utils/helpers';
//import { Responses } from '../support/types';

describe('Tech Quiz', () => {
  context('Tech Quiz', () => {
    beforeEach(() => {

      // Visit the home page
      cy.visit('/');
    });

    it('start the quiz with button click and display first question', () => {
      // Check if the button is visible and contains the text 'Start Quiz'
      cy.get('button').should('contain', 'Start Quiz').click();
      cy.get('.card').should('be.visible');
      cy.get('h2').should('not.be.empty');
    });

    it('take the quiz', () => {
      cy.get('button').should('contain', 'Start Quiz').click();
      cy.get('.card').should('be.visible');
      cy.get('h2').should('not.be.empty');
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('1').click();
      }
      cy.get('.alert-success').should('be.visible').and('contain', 'Your score:');
      // Check if the score is between 0 and 10
    });
  });
})