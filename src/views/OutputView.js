import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_PHRASE } from '../constants/phrase.js';
import { MATCH_MONEY, MATCH_TYPE, MATCH_STRING } from '../constants/match.js';

const OutputView = {
  printNLottosNumbers(lottos) {
    const lottosCount = lottos.length;
    Console.print(OUTPUT_PHRASE.nLottos(lottosCount));
    lottos.forEach((lotto) => Console.print(this.makeLottoNumbersPrintString(lotto)));
    Console.print('');
  },

  printWinningStatistic(user) {
    Console.print(OUTPUT_PHRASE.winningStatistic);
    this.printMatch(user);
    Console.print(OUTPUT_PHRASE.totalProfitRate(user.getTotalProfitRate()));
  },

  printMatch(user) {
    const matchTypes = Object.values(MATCH_TYPE).filter((type) => type !== MATCH_TYPE.etc);
    const matchResult = user.getMatchResult();

    matchTypes.forEach((matchType) => {
      const matchCount = matchResult[matchType];
      const printString = this.makeNCountMatchString({ type: matchType, count: matchCount });
      Console.print(printString);
    });
  },

  makeLottoNumbersPrintString(lotto) {
    const lottoNumbersString = lotto.getNumbers().join(', ');
    return `[${lottoNumbersString}]`;
  },

  makeNCountMatchString({ type, count }) {
    const matchString = MATCH_STRING[type];
    const matchMoney = this.formatCurrency(MATCH_MONEY[type]);
    return `${matchString} ${OUTPUT_PHRASE.matchMoneyAndCount(matchMoney, count)}`;
  },

  formatCurrency(money) {
    return money.toLocaleString('en-US');
  },
};

export default OutputView;
