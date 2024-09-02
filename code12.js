//leetcode 1672


var maximumWealth = function(accounts) {
    
    let rich=[];
    let sum=0;
    for(let i=0;i<accounts.length;i++)
    {
        for(let j=0;j<accounts[i].length;j++)
        {
            sum=sum+accounts[i][j];
        }
        rich[i]=sum;
        sum=0;
    }
    for(let i=1;i<rich.length;i++)
    {
        if(rich[0]<rich[i])rich[0]=rich[i];
    }
    return rich[0];
};
