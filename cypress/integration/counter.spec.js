const COUNT_VALUE_SELECTOR = '.counter-app__value';
const PLUS_BUTTON_SELECTOR = '.counter-app__btn-plus';
const MINUS_BUTTON_SELECTOR = '.counter-app__btn-minus';
const RESET_BUTTON_SELECTOR = '.counter-app__btn-reset';

describe('counter app test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('test: the initial value is 0', () => {
    cy
      .get(COUNT_VALUE_SELECTOR)
      .invoke('text')
      .should('eq', '0');
  });

  it('test: click the plus button to increment the count by 1', () => {
    cy.get(COUNT_VALUE_SELECTOR).invoke('text').then((countValue) => {
      const prevCountValue = Number(countValue);

      cy.get(PLUS_BUTTON_SELECTOR).click();

      cy
        .get(COUNT_VALUE_SELECTOR)
        .invoke('text')
        .should('eq', `${prevCountValue + 1}`);
    });
  });
  
  it('test: click the minus button to decrement the count by 1', () => {
    cy.get(COUNT_VALUE_SELECTOR)
      .invoke('text')
      .then((countValue) => {
        const prevCountValue = Number(countValue);

        cy.get(MINUS_BUTTON_SELECTOR).click();

        cy
          .get(COUNT_VALUE_SELECTOR)
          .invoke('text')
          .should('eq', `${prevCountValue - 1}`);
      });
  });

  it('test: click the reset button to set the count to 0', () => {
    cy.get(RESET_BUTTON_SELECTOR).click();

    cy
      .get(COUNT_VALUE_SELECTOR)
      .invoke('text')
      .should('eq', '0');
  });
});