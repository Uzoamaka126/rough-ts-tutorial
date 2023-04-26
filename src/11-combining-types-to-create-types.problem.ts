/**
 * Here, we need to have a function that returns a user and their respective posts. 
 * How should we go about creating the types for this?
 */

interface Base {
    id: string;
}

interface User extends Base {
    firstName: string;
    lastName: string;
}

interface Post extends Base {
    title: string;
    body: string
}

interface Comment extends Base {
    comment: string;
}

// an example below on how to combine types to create a new type
type UserPosts = User & { posts: Array<Post>} & { age: string }

export const getDefaultUserAndPosts = (): UserPosts => {
    return {
        id: "1",
        firstName: "matt",
        lastName: "pocok",
        age: '23',
        posts: [
            {
                id: "1",
                title: "Why do you eat so much cheese?",
                body: "It's so nice, duh!"
            }
        ]
    }
}