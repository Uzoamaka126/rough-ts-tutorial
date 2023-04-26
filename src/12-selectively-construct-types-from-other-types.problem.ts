import { Equal, Expect } from "../utils/types";

/**
 * Here, we need to create a new type by selectively construction from other types.
 * How do we do construct a new object type with only the "firstName" and "lastName"
 * properties of User? 
 */

/**
 * We can do this via two ways: using Pick or Omit
 * With Pick, we simply pick the values we want 
 * while with "Omit", we tell TypeScript the values we want to omit

 */

interface User {
    id: string;
    firstName: string;
    lastName: string;
}

// an example below on how to combine types to create a new type
type UserPosts = Omit<User, "id">;

type tests = [Expect<Equal<UserPosts, { firstName: string; lastName: string }>>];