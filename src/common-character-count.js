const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
 if(s1.length===0||s2.length===0){
   return 0
 }
 let count=0
 let str1 = s1.split("");
 let str2 = s2.split("");
 for (let i = 0 ; i<str1.length ;i++){
    for (let k = 0;k<str2.length;k++){
      if(str1[i]===str2[k]){
        count++
        str2.splice(k,1)
        break
      };
    };  
 };
 return count
}

module.exports = {
  getCommonCharacterCount
};
