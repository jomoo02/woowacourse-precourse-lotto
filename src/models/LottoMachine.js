import Lotto from './Lotto.js';
import pickUniqueNumbersInRange from '../utils/pickUniqueNumbersInRange.js';
import PurchaseAmountValidation from '../validations/PurchaseAmountValidation.js';

class LottoMachine {
  static buyLottos(purchaseAmount) {
    LottoMachine.#validatePurchaseAmount(purchaseAmount);

    const lottoCount = purchaseAmount / 1000;
    const lottos = LottoMachine.#getCountLottos(lottoCount);
    return lottos;
  }

  static #getCountLottos(count, lottos = []) {
    if (count > 0) {
      const newLotto = LottoMachine.#getOneLotto();
      return LottoMachine.#getCountLottos(count - 1, [...lottos, newLotto]);
    }
    return lottos;
  }

  static #getOneLotto() {
    const randomNumbers = pickUniqueNumbersInRange();
    const lotto = new Lotto(randomNumbers);
    return lotto;
  }

  static #validatePurchaseAmount(purchaseAmount) {
    const validation = new PurchaseAmountValidation(purchaseAmount);
    validation.validate();
  }
}

export default LottoMachine;
