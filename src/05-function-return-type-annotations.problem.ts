import { it, expect } from 'vitest';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: Role;
    posts: Array<Post>
}

type Post = {
    id: number;
    body: string;
    createdAt: string;
}

type Role = "admin" | "user" | "super-admin"

const createUser = (): User => {
    return {
        id: 1,
        firstName: 'Matt',
        lastName: 'Damon',
        role: 'admin',
        // posts: [
        //     { id: 23, body: 'This is a post', createdAt: ''}
        // ]
        posts: []
    }
}

it("should return a valid user", () => {
    const user = createUser();
    
    expect(user.id).toBeTypeOf("number");
    expect(user.firstName).toBeTypeOf("string");
    expect(user.lastName).toBeTypeOf("string");
    expect(user.role).to.be.oneOf(["super-admin", "user", "admin"]);
    expect(user.posts[0]).toBeTypeOf("object");
    expect(user.posts[0].id).toBeTypeOf("number");
})