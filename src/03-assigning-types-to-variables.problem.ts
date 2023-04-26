import { it, expect } from 'vitest';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: Role
}

type Role = "admin" | "user" | "super-admin"

const defaultUser: User = {
    id: 1, 
    firstName: 'Matt', 
    lastName: 'Damon', 
    role: 'super-admin'
};

const getUserId = (user: User) => {
    return user.id;
}

it("should get the user's id", () => {
    const id = getUserId(defaultUser);
    
    expect(id).toEqual(1);
    
})