import User from '../src/models/User';
import Lotto from '../src/models/Lotto';
import pickUniqueNumbersInRange from '../src/utils/pickUniqueNumbersInRange';
import { MATCH_TYPE } from '../src/constants/match';

jest.mock('../src/utils/pickUniqueNumbersInRange');

const mockRandoms = (numbers) => {
  numbers.forEach((number) => {
    pickUniqueNumbersInRange.mockReturnValueOnce(number);
  });
};

describe('유저 테스트', () => {
  test('유저는 구입 금액 만큼 로또를 산다.(한개 당 천원)', () => {
    const LOTTOS_NUMBERS = [
      [1, 2, 3, 4, 5, 6],
      [1, 5, 7, 12, 44, 30],
    ];
    mockRandoms([...LOTTOS_NUMBERS]);
    const PURCHASE_AMOUNT = '2000';
    const COUNT_LOTTOS = 2;
    const user = new User();
    const userLottos = user.buyLottos(PURCHASE_AMOUNT).getLottos();

    expect(userLottos.length).toBe(COUNT_LOTTOS);
  });

  test('유저가 로또를 구입할 금액이 천원 단위가 아니면 에러 처리한다.', () => {
    expect(() => {
      const user = new User();
      user.buyLottos('1500');
    }).toThrow('[ERROR] 구입금액');
  });

  test('유저가 로또 객체를 제대로 구입했는지에 따른 테스트', () => {
    const PURCHASE_AMOUNT = '2000';
    const LOTTOS_NUMBERS = [
      [1, 2, 3, 4, 5, 6],
      [1, 5, 7, 12, 44, 30],
    ];
    const user = new User();
    mockRandoms([...LOTTOS_NUMBERS]);
    const userLottos = user.buyLottos(PURCHASE_AMOUNT).getLottos();

    userLottos.forEach((lotto, index) => {
      expect(lotto instanceof Lotto).toBeTruthy();
      expect(lotto.getNumbers()).toEqual(LOTTOS_NUMBERS[index].sort((a, b) => a - b));
    });
  });

  test('유저의 로또를 당첨 번호와 보너스 번호를 비교한 결과를 저장하고 반환한다.', () => {
    // 당첨 번호 1, 2, 3, 4, 5, 7
    // 보너스 번호 6
    const { three, four, five, fiveAndBonus, six, etc } = MATCH_TYPE;
    const PURCHASE_AMOUNT = '3000';
    const LOTTOS_NUMBERS = [
      [1, 2, 3, 4, 5, 6],
      [1, 5, 7, 12, 44, 30],
      [3, 5, 31, 44, 45, 2],
    ];
    const MATCH_RESULT = {
      [etc]: 1,
      [three]: 1,
      [four]: 0,
      [five]: 0,
      [fiveAndBonus]: 1,
      [six]: 0,
    };
    const TOTAL_PROFIT_RATE = '1000166.7';

    const user = new User();
    mockRandoms([...LOTTOS_NUMBERS]);
    user.buyLottos(PURCHASE_AMOUNT);

    user.saveMatchResult({ count: 5, bonus: true });
    user.saveMatchResult({ count: 3, bonus: false });
    user.saveMatchResult({ count: 2, bonus: false });

    expect(user.getMatchResult()).toEqual(MATCH_RESULT);
    expect(user.getTotalProfitRate()).toBe(TOTAL_PROFIT_RATE);
  });
});
