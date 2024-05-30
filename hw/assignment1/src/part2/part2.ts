import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const isVowel : (ch : string) => boolean = ch => ['a','e','i','o','u'].includes(ch.toLowerCase());
export const countVowels: (s : string) => number = s => (stringToArray(s).filter(isVowel)).length;

/* Question 2 */
const isPar : (ch : string) => boolean = ch => ['{','(','[','}',')',']'].includes(ch);
const getValue : (sum : number, curr : string) => number = (sum, curr) => ; 
export const isPaired: (s :string) => boolean = stringToArray(s).filter(isPar).reduce(getValue(sum, curr),0);

/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence : undefined = undefined

