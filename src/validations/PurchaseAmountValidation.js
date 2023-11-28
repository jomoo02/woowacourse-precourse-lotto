import PURCHASE_AMOUNT from '../constants/purchaseAmount.js';
import { PURCHASE_AMOUNT_ERROR_MESSAGE } from '../constants/errorMessages.js';
import throwError from '../utils/throwError.js';

class PurchaseAmountValidation {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  validate() {
    const { exist, min, integer, thousandUnit } = PURCHASE_AMOUNT_ERROR_MESSAGE;
    this.checkExist(exist).checkGreaterMin(min).checkUnit(thousandUnit).checkInteger(integer);
  }

  checkExist(message) {
    const isNotExist = this.#purchaseAmount === undefined;

    if (isNotExist) {
      throwError(message);
    }
    return this;
  }

  checkGreaterMin(message) {
    const isLessMin = this.#purchaseAmount < PURCHASE_AMOUNT.min;

    if (isLessMin) {
      throwError(message);
    }
    return this;
  }

  checkUnit(message) {
    const isNotUnit = this.#purchaseAmount % PURCHASE_AMOUNT.unit !== 0;

    if (isNotUnit) {
      throwError(message);
    }
    return this;
  }

  checkInteger(message) {
    const isNotInteger = !Number.isInteger(this.#purchaseAmount);

    if (isNotInteger) {
      throwError(message);
    }
    return this;
  }
}

export default PurchaseAmountValidation;
