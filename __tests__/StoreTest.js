import Store from '../src/models/Store';
import { MATCH_COUNT, MATCH_TYPE, MATCH_MONEY } from '../src/constants/match';

describe('저장소 테스트', () => {
  let initialStore;
  const { etc, three, four, five, fiveAndBonus, six } = MATCH_TYPE;
  const ZERO = MATCH_COUNT.zero;

  beforeEach(() => {
    initialStore = {
      [three]: ZERO,
      [four]: ZERO,
      [five]: ZERO,
      [fiveAndBonus]: ZERO,
      [six]: ZERO,
    };
  });

  test('저장소는 현재 반영한 결과를 반환한다. 처음에는 0을 반환한다.', () => {
    const store = new Store();

    expect(store.getMatchs()).toEqual(initialStore);
  });

  test('저장소에 { count, bonus 일치 여부 } 를 전달해 매치 결과를 업데이트 한다.', () => {
    const store = new Store();
    store.updateMatchs({ count: 4, bonus: false });
    initialStore[four] += 1;

    expect(store.getMatchs()).toEqual(initialStore);

    store.updateMatchs({ count: 5, bonus: false });
    store.updateMatchs({ count: 5, bonus: true });
    initialStore[five] += 1;
    initialStore[fiveAndBonus] += 1;

    expect(store.getMatchs()).toEqual(initialStore);
  });

  test('저장소를 업데이트할 떄 아무 값도 전달하지 않으면 etc에 카운트한다.', () => {
    const store = new Store();
    store.updateMatchs();
    initialStore[etc] += 1;

    expect(store.getMatchs()).toEqual(initialStore);
  });

  test('저장소를 업데이트할 떄 count 값이 2 이하면 etc에 카운트한다.', () => {
    const store = new Store();
    store.updateMatchs({ count: 0, bonus: false });
    store.updateMatchs({ count: 1, bonus: false });
    store.updateMatchs({ count: 2, bonus: false });
    initialStore[etc] += 3;

    expect(store.getMatchs()).toEqual(initialStore);
  });

  test('저장소에 모든 매치 결과를 돈으로 환산한다. 처음에는 0원을 반환한다.', () => {
    const store = new Store();
    const TOTAL_MATCH_MONEY = 0;

    expect(store.getTotalMatchMoney()).toBe(TOTAL_MATCH_MONEY);
  });

  test('저장소에 모든 매치 결과를 돈으로 환산한다', () => {
    const store = new Store();
    const TOTAL_MATCH_MONEY = MATCH_MONEY.three * 2 + MATCH_MONEY.five * 1 + MATCH_MONEY.fiveAndBonus * 1;
    store.updateMatchs({ count: 3, bonus: false });
    store.updateMatchs({ count: 3, bonus: false });
    store.updateMatchs({ count: 5, bonus: false });
    store.updateMatchs({ count: 5, bonus: true });

    expect(store.getTotalMatchMoney()).toBe(TOTAL_MATCH_MONEY);
  });
});
