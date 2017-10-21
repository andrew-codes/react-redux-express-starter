describe('Given a valid username password attempt', () => {
    it('shows no error messages', () => {
        cy.visit('http://localhost:3004/');

        cy.get('#email-address')
            .type('fake@email.com', {force: true})
            .should('have.value', 'fake@email.com')


        cy.get('#password')
            .type('password', {force: true})
            .should('have.value', 'password')

        cy.get('.error_container')
            .should('have.class', 'invisible')
    })
});

describe('Given the password is too short', () => {
    it('shows correct error message', () => {
        cy.visit('http://localhost:3004/');

        cy.get('#password')
            .type('a', {force: true})
            .should('have.value', 'a')

        cy.get('.error_container')
            .contains('Try a stronger password.')
            .should('not.have.class', 'invisible')
    })
});