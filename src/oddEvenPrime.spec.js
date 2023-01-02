import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('should return Even when is even number', () => {
    const numbers = [4,6,8,10];
    const expectedResult = ['Even','Even','Even','Even']

    const resp = numbers.map((num)=> game(num));

    expect(resp).toEqual(expectedResult);
  });
  test('should return Odd when is odd number', () => {
    const numbers = [1,9,15,21];
    const expectedResult = ['Odd','Odd','Odd','Odd']

    const resp = numbers.map((num)=> game(num));

    expect(resp).toEqual(expectedResult);
  });
  test('should return numbers when are prime numbers', () => {
    const numbers = [2,3,5,7];
    const expectedResult = ['2','3','5','7']

    const resp = numbers.map((num)=> game(num));

    expect(resp).toEqual(expectedResult);
  });
  test('should return number, Even and Odd in array of string', () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const expectedResult = ['Odd','2','3','Even','5','Even','7','Even','Odd','Even']

    const resp = numbers.map((num)=> game(num));

    expect(resp).toEqual(expectedResult);
  });
});
