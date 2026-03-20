import { MathUtils } from "../../index.js";

describe("MathUtils", () => {
  let mathUtils;
  beforeEach(() => {
    mathUtils = new MathUtils();
  });

  it("should return the sum of two numbers", () => {
    expect(mathUtils.sum(2, 3)).toBe(5);
  });
  it("should return the sum of two negative numbers", () => {
    expect(mathUtils.sum(-2, -3)).toBe(-5);
  });
  it("should return the sum of a positive and a negative number", () => {
    expect(mathUtils.sum(2, -3)).toBe(-1);
  });


  it("should return the difference of two numbers", () => {
    expect(mathUtils.substract(5, 3)).toBe(2);
  });
  it("should return the difference of two negative numbers", () => {
    expect(mathUtils.substract(-5, -3)).toBe(-2);
  });
  it("should return the difference of a positive and a negative number", () => {
    expect(mathUtils.substract(5, -3)).toBe(8);
  });


  it("should return the product of two numbers", () => {
    expect(mathUtils.multiply(2, 3)).toBe(6);
  });
  it("should return the product of two negative numbers", () => {
    expect(mathUtils.multiply(-2, -3)).toBe(6);
  });
  it("should return the product of a positive and a negative number", () => {
    expect(mathUtils.multiply(2, -3)).toBe(-6);
  });


  it("should return the quotient of two numbers", () => {
    expect(mathUtils.divide(6, 3)).toBe(2);
  });
  it("should return the quotient of two negative numbers", () => {
    expect(mathUtils.divide(-6, -3)).toBe(2);
  });
  it("should return the quotient of a positive and a negative number", () => {
    expect(mathUtils.divide(6, -3)).toBe(-2);
  });
  it("should return Infinity when dividing by zero", () => {
    expect(mathUtils.divide(6, 0)).toBe(Infinity);
  });


  it("should return the average of two numbers", () => {
    expect(mathUtils.average(2, 4)).toBe(3);
  });
  it("should return the average of two negative numbers", () => {
    expect(mathUtils.average(-2, -4)).toBe(-3);
  });
  it("should return the average of a positive and a negative number", () => {
    expect(mathUtils.average(2, -4)).toBe(-1);
  });


  it("should return the factorial of a positive number", () => {
    expect(mathUtils.factorial(5)).toBe(120);
  });
  it("should return the factorial of zero", () => {
    expect(mathUtils.factorial(0)).toBe(1);
  }); 
  it("should throw an error for negative numbers in factorial", () => {
    expect(() => mathUtils.factorial(-1)).toThrowError("There is no factorial for negative numbers");
  });


  it("should return true for positive numbers in checkPositivity", () => {
    expect(mathUtils.checkPositivity(5)).toBe(true);
  });
  it("should return false for negative numbers in checkPositivity", () => {
    expect(mathUtils.checkPositivity(-5)).toBe(false);
  });
  it("should return true for zero in checkPositivity", () => {
    expect(mathUtils.checkPositivity(0)).toBe(true);
  });

});
