// describe("my first test", () => {
//   it("should work", () => {
//     expect(true).to.equal(true);
//   });
// });

describe("my first e2e test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // it("should actually work", () => {
  //   cy.contains("Emoji Search");
  //   //cy.get(".component-emoji-result-row").should("have.length", 20);
  //   cy.get(`[data-cy="emoji-row"]`).should("have.length", 20);
  // });

  it("succesfully renders the page header", () => {
    cy.contains("Emoji Search");
  });

  it("renders the list emojis", () => {
    cy.get(`[data-cy="emoji-row"]`).should("have.length", 20);
  });

  it("allows users to search for an emoji", () => {
    //cy.get("input").type("joy");
    cy.get(`[data-cy="emoji-search-input"]`).type("joy");
    cy.get(`[data-cy="emoji-row"]`).should("have.length", 3);
    cy.contains("Joy");
    cy.contains("Joy Cat");
    cy.contains("Joystick");

    cy.get(`[data-cy="emoji-search-input"]`)
      .clear()
      .type("cactus");
    cy.get(`[data-cy="emoji-row"]`).should("have.length", 1);
    cy.contains(/cactus/i);
  });

  it("shows a 'emoji not found' message", () => {
    cy.get(`[data-cy="emoji-search-input"]`).type("emoji that does not exist");
    cy.get(`[data-cy="emoji-row"]`).should("have.length", 0);
    cy.contains("Emojis not found");
    cy.contains("Try search for something else");
  });
});
