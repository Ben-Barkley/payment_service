describe("Login Page", () => {
  it("should log in successfully", () => {
    cy.visit("/login");
    cy.get('input[name="username"]').type("testuser");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});
