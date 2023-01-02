/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.
 */

function sum(...numbers) {
  const numericValues = getNumericValueFromStringArray(numbers);
  return getSumFromArray(numericValues);
}

function getNumericValueFromStringArray(data) {
  return data.map((number) => getNumericValueFromString(number));
}

function getSumFromArray(data) {
  return data.reduce(getSum, 0);
}

function getSum(total, number) {
  return total + number;
}

/*if(isEmptyString(num1) || isEmptyString(num2)){
        return 0;
    }

    return parseInt(num1) + parseInt(num2);
    */

function isEmptyString(string) {
  return string.trim().length === 0;
}

function getNumericValueFromString(string) {
  if (isEmptyString(string)) {
    return 0;
  }

  const numericValue = parseInt(string);
  if (numericValue < 0) {
    return 0;
  }
  return numericValue;
}

export { sum };
