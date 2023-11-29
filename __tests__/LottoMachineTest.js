import LottoMachine from '../src/models/LottoMachine';
import pickUniqueNumbersInRange from '../src/utils/pickUniqueNumbersInRange';

jest.mock('../src/utils/pickUniqueNumbersInRange');

const mockRandoms = (numbers) => {
  numbers.forEach((number) => {
    pickUniqueNumbersInRange.mockReturnValueOnce(number);
  });
};

describe('로또 머신 로또 구매 테스트', () => {
  test('투입 금액이 없으면 예외 처리한다.', () => {
    expect(() => {
      LottoMachine.buyLottos();
    }).toThrow('[ERROR]');
  });

  test('투입 금액이 천원보다 작으면 예외 처리한다.', () => {
    expect(() => {
      LottoMachine.buyLottos(900);
    }).toThrow('[ERROR]');

    expect(() => {
      LottoMachine.buyLottos(800);
    }).toThrow('[ERROR]');

    expect(() => {
      LottoMachine.buyLottos(0);
    }).toThrow('[ERROR]');
  });

  test('투입 금액이 천원 단위가 아니면 예외 처리한다.', () => {
    expect(() => {
      LottoMachine.buyLottos(2500);
    }).toThrow('[ERROR]');

    expect(() => {
      LottoMachine.buyLottos(5555);
    }).toThrow('[ERROR]');
  });

  test('투입 금액이 정수가 아니면 예외 처리한다.', () => {
    expect(() => {
      LottoMachine.buyLottos(2000.5);
    }).toThrow('[ERROR]');
  });

  test('투입 금액이 음수면 예외 처리한다.', () => {
    expect(() => {
      LottoMachine.buyLottos(-1000);
    }).toThrow('[ERROR]');

    expect(() => {
      LottoMachine.buyLottos(-2000);
    }).toThrow('[ERROR]');
  });

  test('투입 금액이 문자열이면 에외 처리한다.', () => {
    expect(() => {
      LottoMachine.buyLottos('1000');
    }).toThrow('[ERROR]');

    expect(() => {
      LottoMachine.buyLottos('만원');
    }).toThrow('[ERROR]');

    expect(() => {
      LottoMachine.buyLottos('30000won');
    }).toThrow('[ERROR]');
  });

  test('투입 금액 만큼 로또를 반환한다.', () => {
    const PURCHASE_AMOUNT = 4000;
    const LOTTOS_NUMBERS = [
      [1, 2, 34, 4, 5, 6],
      [5, 4, 2, 30, 40, 22],
      [7, 8, 9, 22, 24, 27],
      [14, 1, 22, 34, 24, 41],
    ];
    const LOTTOS_COUNT = 4;
    mockRandoms(LOTTOS_NUMBERS);

    const purchasedLottos = LottoMachine.buyLottos(PURCHASE_AMOUNT);
    expect(purchasedLottos.length).toBe(LOTTOS_COUNT);
  });

  test('구매한 로또의 번호 테스트(로또 객체에서 정렬)', () => {
    const PURCHASE_AMOUNT = 4000;
    const LOTTOS_NUMBERS = [
      [7, 2, 34, 4, 5, 6],
      [5, 4, 21, 30, 40, 22],
      [7, 8, 9, 22, 24, 27],
      [14, 1, 22, 34, 24, 41],
    ];
    mockRandoms([...LOTTOS_NUMBERS]);

    const purchasedLottos = LottoMachine.buyLottos(PURCHASE_AMOUNT);

    purchasedLottos.forEach((purchasedLotto, index) => {
      const numbers = purchasedLotto.getNumbers();
      expect(numbers).toEqual([...LOTTOS_NUMBERS[index]].sort((a, b) => a - b));
    });
  });
});
