import PurchaseAmountValidation from './PurchaseAmountValidation.js';
import { PURCHASE_AMOUNT_ERROR_MESSAGE } from '../constants/errorMessages.js';
import PURCHASE_AMOUNT from '../constants/purchaseAmount.js';
import throwError from '../utils/throwError.js';

class UserPurchaseAmountValidation extends PurchaseAmountValidation {
  #purchaseAmount;

  constructor(purchaseAmount) {
    super(Number(purchaseAmount));
    this.#purchaseAmount = purchaseAmount;
  }

  validate() {
    const { exist, integer, min, thousandUnit, firstDigitZero, whiteSpace } = PURCHASE_AMOUNT_ERROR_MESSAGE;
    this.checkExist(exist)
      .checkInteger(integer)
      .checkGreaterMin(min)
      .checkUnit(thousandUnit)
      .checkFirstDigit(firstDigitZero)
      .checkWhiteSpace(whiteSpace);
  }

  checkFirstDigit(message) {
    const isFristDigit = this.#purchaseAmount[0] === PURCHASE_AMOUNT.notFirstDigit;

    if (isFristDigit) {
      throwError(message);
    }
    return this;
  }

  checkWhiteSpace(message) {
    const isHaveWhiteSpace = this.#purchaseAmount.includes(' ');

    if (isHaveWhiteSpace) {
      throwError(message);
    }
    return this;
  }
}

export default UserPurchaseAmountValidation;
