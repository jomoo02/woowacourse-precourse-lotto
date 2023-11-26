import LOTTO_NUMBER from '../constants/lotto.js';
import { LOTTO_NUMBER_ERROR_MESSAGE } from '../constants/errorMessages.js';

class LottoValidation {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  validate() {
    this.#checkLength().#checkDuplication().#checkInRage().#checkInteger().#checkUndefined();
  }

  #checkLength() {
    const isNotCorrectLength = this.#numbers.length !== LOTTO_NUMBER.length;

    if (isNotCorrectLength) {
      LottoValidation.#throwError(LOTTO_NUMBER_ERROR_MESSAGE.length);
    }
    return this;
  }

  #checkDuplication() {
    const deDuplicatedNumbers = [...new Set(this.#numbers)];
    const isDuplication = this.#numbers.length !== deDuplicatedNumbers.length;

    if (isDuplication) {
      LottoValidation.#throwError(LOTTO_NUMBER_ERROR_MESSAGE.duplication);
    }
    return this;
  }

  #checkInRage() {
    const rangeCondition = (number) => number >= LOTTO_NUMBER.min && number <= LOTTO_NUMBER.max;
    const isNotInRage = !this.#numbers.every(rangeCondition);

    if (isNotInRage) {
      LottoValidation.#throwError(LOTTO_NUMBER_ERROR_MESSAGE.inRange);
    }
    return this;
  }

  #checkInteger() {
    const isNotInteger = !this.#numbers.every((number) => Number.isInteger(number));

    if (isNotInteger) {
      LottoValidation.#throwError(LOTTO_NUMBER_ERROR_MESSAGE.integer);
    }
    return this;
  }

  #checkUndefined() {
    for (let index = 0; index < this.#numbers.length; index += 1) {
      if (this.#numbers[index] === undefined) {
        LottoValidation.#throwError(LOTTO_NUMBER_ERROR_MESSAGE.undefined);
      }
    }
    return this;
  }

  static #throwError(message) {
    throw new Error(message);
  }
}

export default LottoValidation;
