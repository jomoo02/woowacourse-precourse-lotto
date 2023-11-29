import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';

async function recurseRead(readFunc, setFunc) {
  try {
    const readData = await readFunc();
    setFunc(readData);
  } catch (error) {
    Console.print(error.message);
    await recurseRead(InputView.readInputData, setFunc);
  }
}

export default recurseRead;
