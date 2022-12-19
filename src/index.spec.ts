import { replaceNumber, fizzBuzz } from "./index";

describe("test replace number", () => {
  test("should return by default the number given", () => {
    expect(replaceNumber(1)).toEqual("1");
  });

  test("[TRIANGULATION] should return by default the number given", () => {
    expect(replaceNumber(2)).toEqual("2");
  });

  test("should replace by 'fizz' if the number is multiple of 3", () => {
    expect(replaceNumber(3)).toEqual("fizz");
  });

  test("[TRIANGULATION] should replace by 'fizz' if the number is multiple of 3", () => {
    expect(replaceNumber(3 * 2)).toEqual("fizz");
  });

  test("should replace by 'buzz' if the number is multiple of 5", () => {
    expect(replaceNumber(5)).toEqual("buzz");
  });

  test("[TRIANGULATION] should replace by 'buzz' if the number is multiple of 5", () => {
    expect(replaceNumber(5 * 2)).toEqual("buzz");
  });

  test("should replace by 'fizzbuzz' if the number is multiple of 3 and 5", () => {
    expect(replaceNumber(3 * 5)).toEqual("fizzbuzz");
  });

  test("[TRIANGULATION] should replace by 'fizzbuzz' if the number is multiple of 3 and 5", () => {
    expect(replaceNumber(3 * 5 * 2)).toEqual("fizzbuzz");
  });
});

describe("test fizzbuzz function", () => {
  test("should replaceNumber for all numbers between 1 and 100", () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  test("[TRIANGULATION] should replaceNumber for all numbers between 1 and 100", () => {
    expect(fizzBuzz(2)).toEqual(["1", "2"]);
  });

  test("[TRIANGULATION] should replaceNumber for all numbers between 1 and 100", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "fizz"]);
  });
});
