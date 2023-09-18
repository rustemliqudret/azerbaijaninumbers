# Azerbaijani Number Converter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://www.npmjs.com/package/calculate-time) 

This project contains a JavaScript class used to convert Azerbaijani numbers and currency.

## Installation

```bash
npm i azerbaijaninumbers
```

### Usage

```js
// Usage example:
import TranslateNumbers from 'azerbaijaninumbers';

const integerFormatNumber = TranslateNumbers.toWord(1234567890);
const stringFormatNumber = TranslateNumbers.toWord('123456');

console.log(integerFormatNumber); // bir milyard iki yüz otuz dörd milyon beş yüz altmış yeddi min səkkiz yüz doxsan
console.log(stringFormatNumber); // yüz iyirmi üç min dörd yüz əlli altı
```

```js
import TranslateNumbers from 'azerbaijaninumbers';

const integerAmount = TranslateNumbers.amounToWord(1234567890);
const decimalAmout = TranslateNumbers.amounToWord(1000520.25);

console.log(integerAmount); //bir milyard iki yüz otuz dörd milyon beş yüz altmış yeddi min səkkiz yüz doxsan manat
console.log(integerAmount); //bir milyon beş yüz iyirmi manat iyirmi beş qəpik

const integerAmount_str = TranslateNumbers.amounToWord('123456');
const decimalAmout_str = TranslateNumbers.amounToWord('10020.25');

console.log(integerAmount_str); // yüz iyirmi üç min dörd yüz əlli altı manat
console.log(decimalAmout_str); //on min iyirmi manat iyirmi beş qəpik
```
