import LottoNumbersValidation from '../validations/LottoNumbersValidation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = Lotto.#sortNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  static #sortNumbers(numbers) {
    return [...numbers.sort((a, b) => a - b)];
  }

  static #validate(numbers) {
    const validation = new LottoNumbersValidation(numbers);
    validation.validate();
  }
}

export default Lotto;
