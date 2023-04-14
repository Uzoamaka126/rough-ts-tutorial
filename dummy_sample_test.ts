// import { describe, it, expect } from 'vitest';
// import { wordWrap } from '../sample/index';

// describe("wordWrap", () => {
    // it("should return the input string when row length >= input string", () => {
    //     const rowLength = 60;
    //     const inputString = "30";
    //     let result = wordWrap(rowLength, inputString)

    //     expect(rowLength).toBeGreaterThanOrEqual(inputString.length);
    //     expect(result).toStrictEqual(inputString);
    // });

      // If the input string is "abc def" the result is "abc", "def"
    // it("should split the input string when row length < input string", () => {
    //     const rowLength = 3;
    //     const inputString = "abc def";
    //     let result = wordWrap(rowLength, inputString);
    //     let expected = inputString.split(" ")

    //     expect(rowLength).toBeLessThan(inputString.length);
    //     expect(result).toStrictEqual(expected);
    // });

    // If the input string is "abcdef" the result is "abc", "def"
    // it("should split long strings", () => {
    //     const rowLength = 3;
    //     const inputString = "abcdef";
    //     let result = wordWrap(rowLength, inputString);
    //     let expected = inputString.split("")

    //     expect(result).toStrictEqual(expected);
    // });

      // If the row-length is 3, and the input string is "abcdef abc" the result is "abc", "def", "abc"
    // it("should split long strings with other strings", () => {
    //     const rowLength = 3;
    //     const inputString = "abcdef abc";
    //     let result = wordWrap(rowLength, inputString);
    //     let expected = ["abc", "def", "abc"]

    //     expect(result).toStrictEqual(expected);
    // });

    // it("should account for spaces b/w strings", () => {
    //     const rowLength = 3;
    //     const inputString = "abcdef abc";
    //     let result = wordWrap(rowLength, inputString);
    //     let expected = ["a b", "c d", "e f"]

    //     expect(result).toStrictEqual(expected);
    // });
// });