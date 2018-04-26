// https://docs.cypress.io/api/introduction/api.html

// describe('View profile', () => {
//   it('Check all info is there', () => {
//     cy.visit('http://localhost:10001')
//     cy.contains('h1', 'Welcome to Your Vue.js App')
//   })
// })

describe('Create profile', () => {
  beforeEach(() => {
    cy.visit('')
    cy.wait(10000)
  })
  it('accepts input', () => {
    cy.get('.test-create-user-name-input')
      .type('Luisa')
  })
})
