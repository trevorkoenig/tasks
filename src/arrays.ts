/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    numbers = [numbers[0], numbers[numbers.length - 1]];
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints: number[] = numbers.map((str: string): number =>
        !isNaN(parseInt(str)) ? parseInt(str) : 0
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarAmts: number[] = amounts.map((str: string): number => {
        // if empty, 0
        // if $, remove
        // if !parseInt, 0, else parseInt
        if (str.length === 0) {
            return 0;
        } else if (str.charAt(0) === "$") {
            const parsed: number = parseInt(str.slice(1));
            return isNaN(parsed) ? 0 : parsed;
        } else {
            const parsed: number = parseInt(str);
            return isNaN(parsed) ? 0 : parsed;
        }
    });
    return dollarAmts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQs: string[] = messages.filter(
        (str: string): boolean =>
            str.length > 0 && str.charAt(str.length - 1) !== "?"
    );
    const shouted: string[] = noQs.map((str: string): string =>
        str.charAt(str.length - 1) === "!" ? str.toUpperCase() : str
    );
    return shouted;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce(
        (shortWords: number, word: string): number =>
            word.length < 4 ? shortWords + 1 : shortWords,
        0
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every((color: string): boolean => {
        const colorLC: string = color.toLowerCase();
        if (colorLC === "red" || colorLC === "blue" || colorLC === "green") {
            return true;
        }
        return false;
    });
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (sum: number, addme: number) => (sum += addme),
        0
    );
    const str: string =
        sum.toString() + "=" + (addends.length === 0 ? "0" : addends.join("+"));
    return str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const retval: number[] = [...values];

    const firstnegindex: number = values.findIndex(
        (num: number): boolean => num < 0
    );
    let sum: number;
    if (firstnegindex === -1) {
        sum = values.reduce((sum: number, num: number) => sum + num, 0);
    } else {
        sum = values
            .slice(0, firstnegindex)
            .reduce((sum: number, num: number) => sum + num, 0);
    }
    firstnegindex !== -1
        ? retval.splice(firstnegindex + 1, 0, sum)
        : retval.push(sum);
    return retval;
}
