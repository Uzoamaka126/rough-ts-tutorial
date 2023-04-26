import { it, expect } from 'vitest';

const createCache = () => {
/* When we need to type an object's keys and values,
We can type it in the following ways:
    ** Where the object keys are unknown
    1. const objName: Record<string, string> = {}; --> where <string, string> are the types 
    of the object's key and value respectively

    ** Where the object keys are unknown
    2. const objName: {
        [id: string]: string
    } = {} --> used only when the name of the object key is known. This also known as an 
    "Index signature"

    3. We can also extract them into a type like this below:
    type Cache = Record<string, string> 
        ----- OR -------
    type Cache = {
        [id: string]: string
    }
    const cache: Cache = {};
**/
    const cache: Record<string, string> = {};

    const add = (id: string, value: string) => {
        cache[id] = value;
    }

    const remove = (id: string) => {
        delete cache[id];
    }

    return {
        cache,
        add, 
        remove,
    } 
}

it("should add values to the cache", () => {    
    const cache = createCache();

    cache.add("123", "Matt");
    expect(cache.cache["123"]).toEqual("Matt")
})

it("should remove values to the cache", () => {  
    const cache = createCache();

    cache.add("123", "Matt");
    cache.remove("123");

    expect(cache.cache["123"]).toEqual(undefined)
})