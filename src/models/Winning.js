import WinningNumbersValidation from '../validations/WinningNumbersValidation.js';
import BonusNumberValidation from '../validations/BonusNumberValidation.js';

class Winning {
  #numbers;

  constructor(winningNumbers, bonusNumber) {
    Winning.#validateWinningNumber(winningNumbers);
    Winning.#validateBonusNumber(winningNumbers, bonusNumber);
    this.#setNumbers(winningNumbers, bonusNumber);
  }

  matchWinningNumbers(numbers) {
    const { winningNumbers } = this.#numbers;
    const winningCount = numbers.filter((number) => winningNumbers.includes(number)).length;
    return winningCount;
  }

  matchBonusNumber(numbers) {
    const { bonusNumber } = this.#numbers;
    const isMatchBonusNumber = numbers.includes(bonusNumber);
    return isMatchBonusNumber;
  }

  #setNumbers(winningNumbers, bonusNumber) {
    const winningNumberArray = winningNumbers.split(',').map((number) => Number(number));
    const bonusNumberToNumber = Number(bonusNumber);
    this.#numbers = {
      winningNumbers: winningNumberArray,
      bonusNumber: bonusNumberToNumber,
    };
  }

  static #validateWinningNumber(winningNumber) {
    const validation = new WinningNumbersValidation(winningNumber);
    validation.validate();
  }

  static #validateBonusNumber(winningNumbers, bonusNumber) {
    const validation = new BonusNumberValidation(winningNumbers, bonusNumber);
    validation.validate();
  }
}

export default Winning;
