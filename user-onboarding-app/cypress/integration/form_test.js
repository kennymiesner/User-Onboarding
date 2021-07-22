const nameInput = () => cy.get('input[name=name]')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=password]')
const termsCheckbox = () => cy.get('input[name=terms]')
const submitBtn = () => cy.get('button')
const errors = () => cy.get('.errors')

describe('User Onboarding App Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Test Name Input', () => {
    nameInput()
      .type('Kenny Miesner')
      .should('have.value', 'Kenny Miesner')
  })

  it('Test Email Input', () => {
    emailInput()
      .type('kennymiesner@gmail.com')
      .should('have.value', 'kennymiesner@gmail.com')
  })

  it('Test Password Input', () => {
    passwordInput()
      .type('#15Kanon')
      .should('have.value', '#15Kanon')
  })

  it('Test Checkbox', () => {
    termsCheckbox()
      .check()
      .uncheck()
  })

  it('Test Submit Button', () => {
    submitBtn()
      .should('be.disabled')
  })

  it('Fill and submit form successfully', () => {
    nameInput()
      .type('Kenny Miesner')
      .should('have.value', 'Kenny Miesner')
    emailInput()
      .type('kennymiesner@gmail.com')
      .should('have.value', 'kennymiesner@gmail.com')
    passwordInput()
      .type('#15Kanon')
      .should('have.value', '#15Kanon')
    termsCheckbox()
      .check()
    submitBtn()
      .should('be.enabled')
      .click()
    cy.contains('Kenny Miesner')
  })

  it('Validate unfilled form field', () => {
    nameInput()
      .type('Kenny Miesner')
      .should('have.value', 'Kenny Miesner')
    emailInput()
      .type(' ')
      .should('have.value', ' ')
    errors().should('exist')
  })
})