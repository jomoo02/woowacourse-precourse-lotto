const INPUT_PURCHASE_AMOUNT = '구입금액을 입력해 주세요.';
const INPUT_WINNING_NUMBERS = '당첨 번호를 입력해 주세요.';
const INPUT_BONUS_NUMBER = '보너스 번호를 입력해 주세요.';

const OUTPUT_N_LOTTOS = (n) => `${n}개를 구매했습니다.`;
const OUTPUT_WINNING_STATISTICS = '당첨 통계\n---';
const OUTPUT_MATCH_MONEY_COUNT = (money, count) => `(${money}원) - ${count}개`;
const OUTPUT_TOTAL_PROFIT_RATE = (totalProfitRate) => `총 수익률은 ${totalProfitRate}%입니다.`;

const INPUT_PHRASE = Object.freeze({
  purchaseAmount: INPUT_PURCHASE_AMOUNT,
  winningNumbers: INPUT_WINNING_NUMBERS,
  bonusNumber: INPUT_BONUS_NUMBER,
});

const OUTPUT_PHRASE = Object.freeze({
  nLottos: OUTPUT_N_LOTTOS,
  winningStatistic: OUTPUT_WINNING_STATISTICS,
  matchMoneyAndCount: OUTPUT_MATCH_MONEY_COUNT,
  totalProfitRate: OUTPUT_TOTAL_PROFIT_RATE,
});

export { INPUT_PHRASE, OUTPUT_PHRASE };
