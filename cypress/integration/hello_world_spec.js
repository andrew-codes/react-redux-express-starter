describe('Hello world', () => {
    it('Login page loads', () => {
        cy.visit('http://localhost:3004/');

        cy.contains('password');
    })
});