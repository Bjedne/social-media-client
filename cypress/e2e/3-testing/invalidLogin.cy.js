describe("invalid login", () => {
  it("visits site and inputs incorrct credentials", () => {
    cy.visit("https://bjedne.github.io/social-media-client/");
    cy.wait(1000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success",
    ).click();
    cy.get("#loginEmail").invoke("val", "incorrectemail@noroff.no");
    cy.get("#loginPassword").invoke("val", "incorrectpassword");
    cy.get("#loginForm button").contains("Login").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
