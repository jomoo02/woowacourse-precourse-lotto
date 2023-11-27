import LOTTO_NUMBER from '../constants/lotto.js';
import { LOTTO_NUMBER_ERROR_MESSAGE } from '../constants/errorMessages.js';
import throwError from '../utils/throwError.js';

class LottoNumbersValidation {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  validate() {
    const { length, duplication, inRange, integer, exist } = LOTTO_NUMBER_ERROR_MESSAGE;

    this.checkLength(length).checkDuplication(duplication).checkInRage(inRange).checkInteger(integer).checkExist(exist);
  }

  checkLength(errorMessage) {
    const isNotCorrectLength = this.#numbers.length !== LOTTO_NUMBER.length;

    if (isNotCorrectLength) {
      throwError(errorMessage);
    }
    return this;
  }

  checkDuplication(errorMessage) {
    const deDuplicatedNumbers = [...new Set(this.#numbers)];
    const isDuplication = this.#numbers.length !== deDuplicatedNumbers.length;

    if (isDuplication) {
      throwError(errorMessage);
    }
    return this;
  }

  checkInRage(errorMessage) {
    const rangeCondition = (number) => number >= LOTTO_NUMBER.min && number <= LOTTO_NUMBER.max;
    const isNotInRage = !this.#numbers.every(rangeCondition);

    if (isNotInRage) {
      throwError(errorMessage);
    }
    return this;
  }

  checkInteger(errorMessage) {
    const isNotInteger = !this.#numbers.every((number) => Number.isInteger(number));

    if (isNotInteger) {
      throwError(errorMessage);
    }
    return this;
  }

  checkExist(errorMessage) {
    for (let index = 0; index < this.#numbers.length; index += 1) {
      if (this.#numbers[index] === undefined || this.#numbers[index] === null) {
        throwError(errorMessage);
      }
    }
    return this;
  }
}

export default LottoNumbersValidation;
