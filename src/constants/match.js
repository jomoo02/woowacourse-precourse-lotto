const MATCH_TYPE_ETC = 'etc';
const MATCH_TYPE_THREE = 'three';
const MATCH_TYPE_FOUR = 'four';
const MATCH_TYPE_FIVE = 'five';
const MATCH_TYPE_FIVE_AND_BONUS = 'fiveAndBonus';
const MATCH_TYPE_SIX = 'six';

const MATCH_STRING_THREE = '3개 일치';
const MATCH_STRING_FOUR = '4개 일치';
const MATCH_STRING_FIVE = '5개 일치';
const MATCH_STRING_FIVE_AND_BONUS = `${MATCH_STRING_FIVE}, 보너스 볼 일치`;
const MATCH_STRING_SIX = '6개 일치';

const MATCH_ZERO = 0;
const MATCH_THREE = 3;
const MATCH_FOUR = 4;
const MATCH_FIVE = 5;
const MATCH_SIX = 6;

const MATCH_THREE_MONEY = 5000;
const MATCH_FOUR_MONEY = 50000;
const MATCH_FIVE_MONEY = 1500000;
const MATCH_FIVE_AND_BONUS_MONEY = 30000000;
const MATCH_SIX_MONEY = 2000000000;

const MATCH_TYPE = Object.freeze({
  etc: MATCH_TYPE_ETC,
  three: MATCH_TYPE_THREE,
  four: MATCH_TYPE_FOUR,
  five: MATCH_TYPE_FIVE,
  fiveAndBonus: MATCH_TYPE_FIVE_AND_BONUS,
  six: MATCH_TYPE_SIX,
});

const MATCH_STRING = Object.freeze({
  three: MATCH_STRING_THREE,
  four: MATCH_STRING_FOUR,
  five: MATCH_STRING_FIVE,
  fiveAndBonus: MATCH_STRING_FIVE_AND_BONUS,
  six: MATCH_STRING_SIX,
});

const MATCH_COUNT = Object.freeze({
  zero: MATCH_ZERO,
  three: MATCH_THREE,
  four: MATCH_FOUR,
  five: MATCH_FIVE,
  six: MATCH_SIX,
});

const MATCH_MONEY = Object.freeze({
  three: MATCH_THREE_MONEY,
  four: MATCH_FOUR_MONEY,
  five: MATCH_FIVE_MONEY,
  fiveAndBonus: MATCH_FIVE_AND_BONUS_MONEY,
  six: MATCH_SIX_MONEY,
});

export { MATCH_TYPE, MATCH_COUNT, MATCH_STRING, MATCH_MONEY };
