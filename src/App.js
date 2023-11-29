import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import User from './models/User.js';
import Winning from './models/Winning.js';
import inputRecursive from './utils/inputRecursive.js';

class App {
  async play() {
    const user = new User();
    const winning = new Winning();
    (await this.#setUserPurchaseAmount(user)).#printLottosNumbers(user);
    (await this.#setWinning(winning)).#matchLottos(user, winning).#printResult(user);
  }

  async #setUserPurchaseAmount(user) {
    const readFunc = InputView.readPurchaseAmount;
    const setFunc = (data) => user.buyLottos(data);
    await inputRecursive(readFunc, setFunc);
    return this;
  }

  async #setWinning(winning) {
    await this.#setWinningNumbers(winning);
    await this.#setBonusNumber(winning);
    return this;
  }

  #printLottosNumbers(user) {
    OutputView.printNLottosNumbers(user.getLottos());
    return this;
  }

  #printResult(user) {
    OutputView.printWinningStatistic(user);
    return this;
  }

  #matchLottos(user, winning) {
    const userLottos = user.getLottos();
    userLottos.forEach((lotto) => {
      const lottoWinningMatchResult = winning.matchLottoNumbers(lotto.getNumbers());
      user.saveMatchResult(lottoWinningMatchResult);
    });
    return this;
  }

  async #setWinningNumbers(winning) {
    const readFunc = InputView.readWinningNumbers;
    const setFunc = (winningNumbers) => winning.setWinningNumbers(winningNumbers);
    await inputRecursive(readFunc, setFunc);
    return this;
  }

  async #setBonusNumber(winning) {
    const readFunc = InputView.readBonusNumber;
    const setFunc = (winningNumbers) => winning.setBonusNumber(winningNumbers);
    await inputRecursive(readFunc, setFunc);
    return this;
  }
}

export default App;
