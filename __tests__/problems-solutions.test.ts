import { it, expect } from 'vitest';
import { getUserId } from '../src/04-assigning-types-to-variables.problem';
import { User } from '../utils/types';

it("should get the user's id", () => {
    const defaultUser: User = {
        id: 1, 
        firstName: 'Matt', 
        lastName: 'Damon', 
        role: 'super-admin'
    };
    const id = getUserId(defaultUser);
    
    expect(id).toEqual(1);
})