import UserPurchaseAmountValidation from '../validations/UserPurchaseAmountValidation.js';
import LottoMachine from './LottoMachine.js';
import Store from './Store.js';
import PURCHASE_AMOUNT from '../constants/purchaseAmount.js';

class User {
  #lottos;

  #store;

  constructor() {
    this.#store = new Store();
  }

  buyLottos(purchaseAmount) {
    User.#validatePurchaseAmount(purchaseAmount);
    this.#lottos = LottoMachine.buyLottos(Number(purchaseAmount));
    return this;
  }

  getLottos() {
    return this.#lottos;
  }

  saveMatchResult(matchInfo) {
    this.#store.updateMatchs(matchInfo);
  }

  getMatchResult() {
    return this.#store.getMatchs();
  }

  getTotalProfitRate() {
    const totalProfitRate = (this.#store.getTotalMatchMoney() / (this.#lottos.length * PURCHASE_AMOUNT.unit)) * 100;
    return totalProfitRate.toFixed(1);
  }

  static #validatePurchaseAmount(purchaseAmount) {
    const validation = new UserPurchaseAmountValidation(purchaseAmount);
    validation.validate();
  }
}

export default User;
