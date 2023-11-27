import { Random } from '@woowacourse/mission-utils';
import LOTTO_NUMBER from '../constants/lotto.js';

function pickUniqueNumbersInRange() {
  const { min, max, length } = LOTTO_NUMBER;
  const uniqueNumbers = Random.pickUniqueNumbersInRange(min, max, length);
  return uniqueNumbers;
}

export default pickUniqueNumbersInRange;
