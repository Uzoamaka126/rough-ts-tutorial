import { it, expect } from 'vitest';

interface LukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birthYear: string;
    gender: string;
}

const getCharacter = async(): Promise<LukeSkywalker> => {
    const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
        return res.json()
    })

    /* 
        There are various ways to represent data like this 
        1. const matt = {} as LukeSkywalker --> cast the 'matt' variable to represent LukeSkywalker
        2. return data as LukeSkywalker --> cast data to represent LukeSkywalker
        

        if we had something like this:
        const matt: LukeSkywalker = {}  [also the safer option] --> this is going to throw an error because -->
        --> the empty object does not have any propery similar to that of the LukeSkywalker object

    */

    return data;
}

it("should return Luke Skywalker", async () => {
    const LUKE = await getCharacter();
    console.log({ LUKE });
    
    
    expect(LUKE.name).toBe("Luke Skywalker");
    expect(LUKE.eye_color).toBe("blue");
    expect(LUKE.gender).toBe("male");
    expect(LUKE.hair_color).toBe("blond");
})