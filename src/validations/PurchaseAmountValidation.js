import PURCHASE_AMOUNT from '../constants/purchaseAmount.js';
import { PURCHASE_AMOUNT_ERROR_MESSAGE } from '../constants/errorMessages.js';

class PurchaseAmountValidation {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  validate() {
    this.#checkExist().#checkGreaterMin().#checkUnit().#checkInteger();
  }

  #checkExist() {
    const isNotExist = this.#purchaseAmount === undefined;

    if (isNotExist) {
      PurchaseAmountValidation.#throwError(PURCHASE_AMOUNT_ERROR_MESSAGE.exist);
    }
    return this;
  }

  #checkGreaterMin() {
    const isLessMin = this.#purchaseAmount < PURCHASE_AMOUNT.min;

    if (isLessMin) {
      PurchaseAmountValidation.#throwError(PURCHASE_AMOUNT_ERROR_MESSAGE.min);
    }
    return this;
  }

  #checkUnit() {
    const isNotUnit = this.#purchaseAmount % PURCHASE_AMOUNT.unit !== 0;

    if (isNotUnit) {
      PurchaseAmountValidation.#throwError(PURCHASE_AMOUNT_ERROR_MESSAGE.thousandUnit);
    }
    return this;
  }

  #checkInteger() {
    const isNotInteger = !Number.isInteger(this.#purchaseAmount);

    if (isNotInteger) {
      PurchaseAmountValidation.#throwError(PURCHASE_AMOUNT_ERROR_MESSAGE.integer);
    }
    return this;
  }

  static #throwError(message) {
    throw new Error(message);
  }
}

export default PurchaseAmountValidation;
