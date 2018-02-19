// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*function maxChar(str) {

  const charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str){
    //for every char in string
    if(charMap[char]) {
      //if there's a character then iterate by 1
      charMap[char]++;
    }else{
      //otherwise set to one
      charMap[char] = 1;
    }
  }

  for (let char in charMap){
    //used to iterate thru an object - IN IN IN IN
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
*/

function maxChar (str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str){
    if(charMap[char]) {
      charMap[char]++
    }else{
      charMap[char] = 1;
    }
  }
  for (let char in charMap){
    if (charMap[char] > max){
      max = charMap[char]
      maxChar = char;
    }
  }
  return maxChar;
}
module.exports = maxChar;

