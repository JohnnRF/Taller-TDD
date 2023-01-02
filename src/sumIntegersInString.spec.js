import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('should return 0 when the string has no numbers ', () => {
    //ARRANGE
    const value = 'johnn';
    const result = 0;
    //ACT
    const resp = sumOfIntegersInString(value);
    //ASSET
    expect(resp).toBe(result);
  });
  test('should return 4 when string is h3ll0w0r1d', () => {
    //ARRANGE
    const value = 'h3ll0w0r1d';
    const result = 4;
    //ACT
    const resp = sumOfIntegersInString(value);
    //ASSET
    expect(resp).toBe(result);
  });
  test('should return 3635 when string is The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog', () => {
    //ARRANGE
    const value = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
    const result = 3635;
    //ACT
    const resp = sumOfIntegersInString(value);
    //ASSET
    expect(resp).toBe(result);
  });
});
