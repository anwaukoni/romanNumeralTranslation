const MAX_NUMBER = 3999;
const MIN_NUMBER = 0;

function translateNumber(num) {
  const thousands = ['', 'M', 'MM', 'MMM'];
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  
    if (typeof num !== 'number') {
      return 'Please insert a number.'
    } else if(num <= MIN_NUMBER || num > MAX_NUMBER) {
      return 'Please insert a valid number between 1 and 3999';
    }
  
  const result = thousands[Math.floor(num/1000)] + hundreds[Math.floor((num%1000)/100)] + tens[Math.floor((num%100)/10)] + ones[num%10];
  
  return result;
}

function translateRomanNumeral(str) {
  const mapping = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }
  
  if (typeof str !== "string") {
    return 'Please insert a string';
  };

  const arr = str.toUpperCase().split("");
  const isInvalidSequence = arr.filter((currentLetter, idx) => {
    let countDuplicateLetter = {};
    const prevMapValue = mapping[arr[idx - 1]];
    const currMapValue = mapping[currentLetter];
    const nextMapValue = mapping[arr[idx + 1]];
    const nextLetter = arr[idx + 1];

    for (let i = 0; i < arr.length; i++ ) {
      const curr = arr[i]
      const next = arr[i + 1];

      if (curr === next) {
        countDuplicateLetter[curr] = ++countDuplicateLetter[curr] || 1;
      }
    }

    if (currentLetter === nextLetter) {
      if(["L", "V", "D"].indexOf(currentLetter) > -1) {
        return true;
      }
      return countDuplicateLetter[currentLetter] >= 3
    }

    if (currentLetter !== nextLetter && currMapValue < nextMapValue){
      if (mapping[currentLetter.concat(nextLetter)]) {
        return mapping[currentLetter.concat(nextLetter)] > prevMapValue
      }
      return true;
    } 
  });
  const result =  arr.reduce((acc, letter, idx) => {
    const curr = mapping[letter];
    const next = mapping[arr[idx + 1]];
    if (next === undefined || next <= curr) {
      return acc + curr;
    } else {
      return acc - curr;
    }
  }, MIN_NUMBER);

  if (isInvalidSequence.length ||
      result <= MIN_NUMBER || 
      result > MAX_NUMBER ||
      isNaN(result)
      ) {
    return "Please insert a valid Roman Numeral between I and MMMCMXCIX";
  };

  return result;

};

module.exports = {
  translateNumber: translateNumber,
  translateRomanNumeral: translateRomanNumeral
};


