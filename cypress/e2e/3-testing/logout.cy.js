describe("logout", () => {
  it("visits site, logs in and successfully logs out", () => {
    cy.visit("https://bjedne.github.io/social-media-client/");
    cy.wait(1000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success",
    ).click();
    cy.get("#loginEmail").invoke("val", "bjednetest@noroff.no");
    cy.get("#loginPassword").invoke("val", "verystrongpassword1");
    cy.wait(500);
    cy.get("#loginForm button").contains("Login").click();
    cy.wait(1000);
    cy.get("button.btn-outline-warning").contains("Logout").click();
    cy.get("#registerForm > div.modal-footer > button.btn-outline-success")
      .contains("Login")
      .should("exist");
  });
});
