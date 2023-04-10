export function wordWrap(rowLength: number, str: string): string | string[] {
    let result: string | string[];

    if (!rowLength || !str) return "";

    if (rowLength >= str.length) {
        result = str;
    }

    if (rowLength < str.length) {
        /*
            "abc abc" --> ["abc", "abc"]
            ["abc", "abc"][0] -> "abc"
            "abc" -> "a"
            
            ["abc", abc"] --> ["a", "bc", "abc"]
        */
        // if (str.includes(" ")) { // "abc abc"
        //     const splitWords = str.split(" "); // ["abc", "abc"]
        //         while (splitWords.length < 3) { // ["abc abc"]
        //             let wordIndex = 0; // "abc"
        //             if (splitWords[wordIndex].length > 1 && splitWords[wordIndex].length <= 3) { // "abc" || "ab"
        //                 splitWords[wordIndex] = splitWords[wordIndex].slice(wordIndex, wordIndex + 1)
        //                 splitWords.push(slicedWord);
        //                 wordIndex = wordIndex + 1;
        //             } 

        //         }
        //         let arr = []
        //         arr = splitWords.map(word => {
        //             if (word.length > 3) {
        //                 return [...word.split('')]
        //             } else {
        //                 return word
        //             }
        //         })
        // } else {  // abcdef
        //     result = 
        // }
    }

    return result;
}