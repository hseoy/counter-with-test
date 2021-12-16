const COUNT_VALUE_SELECTOR = '.counter-app__value';
const PLUS_BUTTON_SELECTOR = '.counter-app__btn-plus';
const MINUS_BUTTON_SELECTOR = '.counter-app__btn-minus';
const RESET_BUTTON_SELECTOR = '.counter-app__btn-reset';

const $ = (selector) => document.querySelector(selector)

const $countValue = $(COUNT_VALUE_SELECTOR);
const $plusButton = $(PLUS_BUTTON_SELECTOR);
const $minusButton = $(MINUS_BUTTON_SELECTOR);
const $resetButton = $(RESET_BUTTON_SELECTOR);

const setCountValue = (next) => {
  if(typeof Number(next) === 'number' && Number.isInteger(Number(next))) {
    $countValue.textContent = next;
    return;
  }

  if (typeof next === 'function') {
    $countValue.textContent = next(Number($countValue.textContent));
    return;
  }

  throw new Error('Invalid prop type');
};

const initCounterApp = () => {
  setCountValue(0);

  const onClickPlus = () => setCountValue((prev) => prev + 1);
  const onClickMinus = () => setCountValue((prev) => prev - 1);
  const onClickReset = () => setCountValue(0);

  $plusButton.addEventListener('click', onClickPlus);
  $minusButton.addEventListener('click', onClickMinus);
  $resetButton.addEventListener('click', onClickReset);
};

initCounterApp();