import { it, expect } from 'vitest';

type Params = {
    firstName: string;
    lastName?: string
}

export const getName = (params: Params): string => {
    return `${params.firstName} ${params.lastName}`
}

it("should work with just the first name", () => {
    const name = getName({ firstName: 'Matt' });
    
    expect(name).toEqual('Matt');
})