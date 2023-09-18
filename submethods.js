import { numbers } from './constants.js';

class ConvertMethods {
  chunk(num) {
    if (num.constructor === Number) {
      num = num.toString();
    }
    const data = [];
    while (num.length > 0) {
      data.push(num.slice(-3));
      num = num.slice(0, -3);
    }
    return data.reverse();
  }
  extractUndefined(str) {
    const arr = str.split(' ');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 'undefined') {
        result.push(arr[i]);
      }
    }
    return result.join(' ');
  }
  convert(num) {
    if (num.constructor === Number) {
      num = num.toString();
    }
    //fill num to 3 digits
    num = num.padStart(3, '0');
    let hundreds;
    num[0] === '1'
      ? (hundreds = numbers[100])
      : num[0] === '0'
      ? (hundreds = undefined)
      : (hundreds = `${numbers[num[0]]} ${numbers[100]}`);

    let tens = `${numbers[num[1] * 10]}`;
    let ones = numbers[num[2]];
    return this.extractUndefined(`${hundreds} ${tens} ${ones}`);
  }
}

export default new ConvertMethods();
