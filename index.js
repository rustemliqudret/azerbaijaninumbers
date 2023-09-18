import { numbers, currency } from './constants.js';
import ConvertMethods from './submethods.js';

class TranslateNumbers {
  constructor(num) {
    this.num = num;
  }
  integerToWord(num) {
    if (num.constructor === Number) {
      num = num.toString();
    }
    let word = [];
    let chunks = ConvertMethods.chunk(num);
    chunks.forEach((chunk, index) => {
      let separator =
        Math.pow(1000, chunks.length - index - 1) > 100
          ? '' + numbers[Math.pow(1000, chunks.length - index - 1)]
          : '';
      //if chunk is 000, do not convert
      if (chunk === '000') {
        return;
      } else {
        word.push(ConvertMethods.convert(chunk) + ' ' + separator);
      }
    });
    return word.join(' ').trim();
  }
  amounToWord(num) {
    if (num.constructor === Number) {
      num = num.toString();
    }
    //when .20 then we must right twenty qəpik not two qəpik
    if (num.includes('.')) {
      let arr = num.split('.');
      if (arr[1].length === 1) {
        arr[1] = arr[1] + '0';
      }
      return (
        this.integerToWord(arr[0]) +
        ' ' +
        currency[1] +
        ' ' +
        this.integerToWord(arr[1]) +
        ' ' +
        currency[2]
      );
    } else {
      return this.integerToWord(num) + ' ' + currency[1];
    }
  }
}

export default new TranslateNumbers();
