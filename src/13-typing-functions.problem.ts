import { Equal, Expect } from "../utils/types";

/**
 * How do we type onFocusChange; note that "onFocusChange" is a function inside another function 
 * 
 * Note: if a function returns nothing, use "void"
 * to indicate that the function isn't supposed to return anything;
 * 
 * if you use "undefined", then you will be required to actually return undefined in your function
 */

type ListenerFunc = (param: boolean) => void;

const addListener = (onFocusChange: ListenerFunc) => {
    window.addEventListener("focus", () => {
        onFocusChange(true)
    });

    window.addEventListener("blur", () => {
        onFocusChange(false)
    })
}

addListener((isFocused) => {
    console.log({ isFocused });

    type tests = [Expect<Equal<typeof isFocused, boolean>>];    
});