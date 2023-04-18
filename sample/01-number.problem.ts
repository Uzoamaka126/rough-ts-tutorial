import { it, expect } from 'vitest';

export const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
}

it("should add the two numbers together", () => {
    const resultOne = addTwoNumbers(0, 2);
    expect(resultOne).toEqual(2);
    expect((typeof resultOne)).toBe('number');
})