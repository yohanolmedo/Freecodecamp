/*Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.*/

function reverseString(str) {
    let reverseWord = [];
    for(let i=0; i<str.length; i++){
        reverseWord.unshift(str[i]);
    }
    return reverseWord.join("");
}
  
  reverseString("hello");

