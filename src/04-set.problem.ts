import { it, expect } from 'vitest';
import { Expect, Equal } from '../utils/types'

const guitarists = new Set<string>();

// const map = new Map<string, object>() // <key, value>

// map.set("dddd", {})

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("should contain Jimi and Eric", () => {    
    expect(guitarists.has("Jimi Hendrix")).toEqual(true);
    expect(guitarists.has("Eric Clapton")).toEqual(true);
})

it("should give a type error when you try to pass a non-string", () => {  
    guitarists.add(2)
})

it("should be typed as an array of strings", () => {    
    const guitaristsArr = Array.from(guitarists);

    type tests = [Expect<Equal<typeof guitaristsArr, string[]>>];
}) 