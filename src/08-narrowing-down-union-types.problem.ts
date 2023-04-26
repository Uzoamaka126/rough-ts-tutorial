import { it, expect } from 'vitest';

const coerceAmount = (amount: number | { amount: number }): number => {
    if (typeof amount === 'object') {
        return amount.amount
    }
    
    return amount;
}

it("should return the amount when passed an object", () => {    
    expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("should return the amount when passed a number", () => {    
    expect(coerceAmount(20)).toEqual(20);
})