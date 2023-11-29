import { Console } from '@woowacourse/mission-utils';
import { INPUT_PHRASE } from '../constants/phrase.js';

const InputView = {
  async readInputData(printString = '') {
    const data = await Console.readLineAsync(printString);
    Console.print('');
    return data;
  },

  async readPurchaseAmount() {
    const purchaseAmount = await InputView.readInputData(`${INPUT_PHRASE.purchaseAmount}\n`);
    return purchaseAmount;
  },

  async readWinningNumbers() {
    const winningNumbers = await InputView.readInputData(`${INPUT_PHRASE.winningNumbers}\n`);
    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await InputView.readInputData(`${INPUT_PHRASE.bonusNumber}\n`);
    return bonusNumber;
  },
};

export default InputView;
