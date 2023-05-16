describe('Login Test', () => {
  it('should display welcome message after login', () => {
    cy.visit('http://localhost:4200'); // Visita la pagina di login
    cy.contains('type').click();
  });
});
