import Lotto from '../src/models/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test("로또 번호가 6개 보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 0, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 46, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 4.6, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, '5', 6]);
    }).toThrow("[ERROR]");
  });

  test('로또 번호에 undefined가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, , 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, , 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test('로또 번호는 정렬되어 반환된다.', () => {
    const INPUT = [45, 2, 1, 34, 4, 7];
    const OUTPUT = [1, 2, 4, 7, 34, 45];
    const lotto = new Lotto(INPUT);

    expect(lotto.getNumbers()).toEqual(OUTPUT);
  });
});
