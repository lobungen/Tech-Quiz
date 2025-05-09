import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("<Quiz />", () => {
  it("should initially render start button", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Quiz />);
    cy.get('[data-cy="start-button"]').should("exist").and("contain", "Start");
  });

  it("should load and show a question after clicking start quiz", () => {
    mount(<Quiz />);
    cy.get('[data-cy="start-button"]').click();
    cy.get('[data-cy="question"]').should("exist");
    cy.get('[data-cy="answer-option"]').should("have.length", 4);
  });
});
