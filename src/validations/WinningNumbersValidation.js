import LottoValidation from './LottoNumbersValidation.js';
import { WINNING_NUMBER_ERROR_MESSAGE } from '../constants/errorMessages.js';
import WINNING_NUMBER from '../constants/winningNumber.js';
import throwError from '../utils/throwError.js';

class WinningNumbersValidation extends LottoValidation {
  #winningNumbers;

  constructor(winningNumbers) {
    super(winningNumbers.split(',').map((winningNumber) => Number(winningNumber)));
    this.#winningNumbers = winningNumbers;
  }

  validate() {
    const { length, duplication, inRange, integer, exist, firstDigitZero, whiteSpace } = WINNING_NUMBER_ERROR_MESSAGE;

    this.checkLength(length)
      .checkDuplication(duplication)
      .checkInRage(inRange)
      .checkInteger(integer)
      .checkExist(exist)
      .checkFirstDigitZero(firstDigitZero)
      .checkWhiteSpace(whiteSpace);
  }

  checkExist(errorMessage) {
    const isNotExist = this.#winningNumbers === undefined || this.#winningNumbers === null;

    if (isNotExist) {
      throwError(errorMessage);
    }
    return this;
  }

  checkFirstDigitZero(errorMessage) {
    const winningNumbers = this.#winningNumbers.split(',');
    const isFristDigitZero = !winningNumbers.every((number) => number[0] !== WINNING_NUMBER.notFirstDigit);

    if (isFristDigitZero) {
      throwError(errorMessage);
    }
    return this;
  }

  checkWhiteSpace(errorMessage) {
    const isHaveWhiteSpace = this.#winningNumbers.includes(' ');

    if (isHaveWhiteSpace) {
      throwError(errorMessage);
    }
    return this;
  }
}

export default WinningNumbersValidation;
