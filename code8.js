//leetcode 2160

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const arr=num.toString().split("").sort();
    const numm=Number(arr[0]+arr[2])+Number(arr[1]+arr[3]);
    return numm;
};
