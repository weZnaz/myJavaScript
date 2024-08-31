//   leetcode 9


/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let pan=x.toString().split("").reverse().join("");
    if(x==pan)return true;
    else
    return false;
};
