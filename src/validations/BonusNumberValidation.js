import WinningNumbersValidation from './WinningNumbersValidation.js';
import { BONUS_NUMBER_ERROR_MESSAGE } from '../constants/errorMessages.js';
import throwError from '../utils/throwError.js';

class BonusNumberValidation extends WinningNumbersValidation {
  #numbers;

  constructor(winningNumbers, bonusNumber) {
    super(bonusNumber);
    this.#numbers = { winningNumbers, bonusNumber };
  }

  validate() {
    const { inRange, integer, duplicateWinninNumber, firstDigitZero, whiteSpace } = BONUS_NUMBER_ERROR_MESSAGE;

    this.checkInRage(inRange)
      .checkInteger(integer)
      .checkFirstDigitZero(firstDigitZero)
      .checkWhiteSpace(whiteSpace)
      .checDuplicateWinningNumbers(duplicateWinninNumber);
  }

  checDuplicateWinningNumbers(message) {
    const { winningNumbers, bonusNumber } = this.#numbers;
    const isDuplicationWinningNumbers = winningNumbers.includes(bonusNumber);

    if (isDuplicationWinningNumbers) {
      throwError(message);
    }
    return this;
  }
}

export default BonusNumberValidation;
