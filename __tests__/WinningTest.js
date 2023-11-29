import Winning from '../src/models/Winning';

describe('당첨 번호 테스트', () => {
  let winning;

  beforeEach(() => {
    winning = new Winning();
  });

  test('당첨 번호가 6자리가 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6,7');
    }).toThrow('[ERROR] 당첨 번호가');
  });

  test('당첨 번호가 중복된 경우 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,5');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,1,5,6');
    }).toThrow('[ERROR] 당첨 번호가');
  });

  test('당첨 번호가 1부터 45사이의 값이 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,46');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,0,4,5,6');
    }).toThrow('[ERROR] 당첨 번호가');
  });

  test('당첨 번호가 양의 정수가 아닌 값인 경우 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,-5');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4.5,5,6');
    }).toThrow('[ERROR] 당첨 번호가');
  });

  test('당첨 번호에 문자가 있는 경우 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,q');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,won,5,6');
    }).toThrow('[ERROR] 당첨 번호가');
  });

  test('당첨 번호에 맨 앞에 0이 있는 값은 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,06');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,04,5,6');
    }).toThrow('[ERROR] 당첨 번호가');
  });

  test('당첨 번호에 공백이 있는 경우 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6 ');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers(' 1,2,3,4,5,6');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2, 3,4,5,6');
    }).toThrow('[ERROR] 당첨 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5 ,6');
    }).toThrow('[ERROR] 당첨 번호가');
  });

  test('당첨 번호와 번호를 비교해 당첨 수를 반환한다.', () => {
    const WINNING_NUMBERS = '5,6,12,32,42,39';
    // const BONUS_NUMBER = '7';
    const LOTTO_NUMBERS = [
      [1, 5, 6, 7, 8, 42],
      [1, 2, 3, 4, 5, 6],
      [12, 22, 32, 42, 5, 6],
    ];
    const WINNING_COUNT = [3, 2, 5];

    winning.setWinningNumbers(WINNING_NUMBERS);

    LOTTO_NUMBERS.forEach((numbers, index) => {
      expect(winning.matchLottoNumbers(numbers).count).toBe(WINNING_COUNT[index]);
    });
  });
});

describe('보너스 번호 테스트', () => {
  let winning;

  beforeEach(() => {
    winning = new Winning();
  });

  test('보너스 번호는 1부터 45사이 값이 아니면 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('46');
    }).toThrow('[ERROR] 보너스 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('0');
    }).toThrow('[ERROR] 보너스 번호가');
  });

  test('보너스 번호는 정수가 아니면 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('a');
    }).toThrow('[ERROR] 보너스 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('5.5');
    }).toThrow('[ERROR] 보너스 번호가');
  });

  test('보너스 번호가 음수면 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('-1');
    }).toThrow('[ERROR] 보너스 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('-10.5');
    }).toThrow('[ERROR] 보너스 번호가');
  });

  test('보너스 번호가 당첨 번호와 중복되면 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('6');
    }).toThrow('[ERROR] 보너스 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('3');
    }).toThrow('[ERROR] 보너스 번호가');
  });

  test('보너스 번호의 맨 앞의 값이 0이면 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('09');
    }).toThrow('[ERROR] 보너스 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('007');
    }).toThrow('[ERROR] 보너스 번호가');
  });

  test('보너스 번호에 공백이 있으면 예외 처리한다.', () => {
    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber(' 9');
    }).toThrow('[ERROR] 보너스 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('7 ');
    }).toThrow('[ERROR] 보너스 번호가');

    expect(() => {
      winning.setWinningNumbers('1,2,3,4,5,6');
      winning.setBonusNumber('2 4');
    }).toThrow('[ERROR] 보너스 번호가');
  });

  test('보너스 번호와 번호를 비교해 번호에 보너스 번호가 있는지 확인한다.', () => {
    const WINNING_NUMBERS = '5,6,12,32,42,39';
    const BONUS_NUMBER = '7';
    const LOTTO_NUMBERS = [
      [1, 5, 6, 7, 8, 42],
      [1, 2, 3, 4, 5, 6],
      [12, 22, 32, 42, 5, 6],
    ];
    const EXIST_BONUS_NUMBER = true;
    const NONE_BONUS_NUMBER = false;
    const WINNING_COUNT = [EXIST_BONUS_NUMBER, NONE_BONUS_NUMBER, NONE_BONUS_NUMBER];

    winning.setWinningNumbers(WINNING_NUMBERS);
    winning.setBonusNumber(BONUS_NUMBER);

    LOTTO_NUMBERS.forEach((numbers, index) => {
      expect(winning.matchLottoNumbers(numbers).bonus).toBe(WINNING_COUNT[index]);
    });
  });
});
