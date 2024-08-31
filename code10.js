//leetcode 13
// calculating roman to decimal...




var romanToInt = function(str) {
const roman={

        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
}
       let arr=str.split("");
       let sum=0;
       for(let i=0;i<arr.length;i++)
       {
        let curr=roman[arr[i]];
        let nxt=roman[arr[i+1]];
        if(curr<nxt){
        sum=sum+(nxt-curr);
        i++;
        }
        else
        sum=sum+curr;

       }

     return sum;
    
};
