
//Input: nums = [0,2,1,5,3,4]
//Output: [0,1,2,4,5,3]

var buildArray = function(nums) {

    let arr=[];
    for(let i=0;i<nums.length;i++)
    {
        let x=nums[i];
        arr[i]=nums[x];
    }
    return arr;
