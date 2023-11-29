import WinningNumbersValidation from '../validations/WinningNumbersValidation.js';
import BonusNumberValidation from '../validations/BonusNumberValidation.js';

class Winning {
  #numbers;

  constructor() {
    this.#numbers = { winningNumbers: [], bonusNumber: 0 };
  }

  setWinningNumbers(winningNumbers) {
    Winning.#validateWinningNumber(winningNumbers);
    this.#numbers.winningNumbers = winningNumbers.split(',').map((number) => Number(number));
  }

  setBonusNumber(bonusNumber) {
    const { winningNumbers } = this.#numbers;
    Winning.#validateBonusNumber(winningNumbers, bonusNumber);
    this.#numbers.bonusNumber = Number(bonusNumber);
  }

  matchLottoNumbers(lottoNumbers) {
    return { count: this.#matchWinningNumbers(lottoNumbers), bonus: this.#matchBonusNumber(lottoNumbers) };
  }

  #matchWinningNumbers(numbers) {
    const { winningNumbers } = this.#numbers;
    const winningCount = numbers.filter((number) => winningNumbers.includes(number)).length;
    return winningCount;
  }

  #matchBonusNumber(numbers) {
    const { bonusNumber } = this.#numbers;
    const isMatchBonusNumber = numbers.includes(bonusNumber);
    return isMatchBonusNumber;
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
