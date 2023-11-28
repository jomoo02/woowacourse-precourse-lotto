import { MATCH_COUNT, MATCH_MONEY, MATCH_TYPE } from '../constants/match.js';

class Store {
  #matchs;

  constructor() {
    this.#matchs = Store.#createMatchs();
  }

  updateMatchs(matchInfo = { count: 0, bonus: false }) {
    const matchType = Store.#getMatchType(matchInfo);
    this.#matchs[matchType] += 1;
  }

  getMatchs() {
    return this.#matchs;
  }

  getTotalMatchMoney() {
    const matchTypes = Object.values(MATCH_TYPE).filter((type) => type !== MATCH_TYPE.etc);
    return matchTypes.reduce((acc, type) => {
      const count = this.#matchs[type];
      const matchMoney = MATCH_MONEY[type];
      return acc + count * matchMoney;
    }, 0);
  }

  static #getMatchType({ count, bonus }) {
    const { three, four, five, six } = MATCH_COUNT;

    if (count === three) {
      return MATCH_TYPE.three;
    }
    if (count === four) {
      return MATCH_TYPE.four;
    }
    if (count === five) {
      if (bonus) {
        return MATCH_TYPE.fiveAndBonus;
      }
      return MATCH_TYPE.five;
    }
    if (count === six) {
      return MATCH_TYPE.six;
    }
    return MATCH_TYPE.etc;
  }

  static #createMatchs() {
    const { three, four, five, fiveAndBonus, six } = MATCH_TYPE;
    const ZERO = MATCH_COUNT.zero;
    return {
      [three]: ZERO,
      [four]: ZERO,
      [five]: ZERO,
      [fiveAndBonus]: ZERO,
      [six]: ZERO,
    };
  }
}

export default Store;
