import { it, expect } from 'vitest';

/* 
We can think of two way to type errors when using a try...catch

1. 
    ...catch (e) {
        return (e as Error).message
    }
2.  ...catch (e) {
        if (e instanceof Error) {
            return e.message
        }
        // do something else
    }
*/

function tryCatchDemo(state: "fail" | "succeed") {
    try {
        if (state === 'fail') {
            throw new Error("Failure!")
        }
    } catch (error) {
        return (error as Error).message
    }
}

it("should return the message when it fails", () => {    
    expect(tryCatchDemo("fail")).toEqual("Failure!");
});