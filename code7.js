
//****
//*  *
//*  *
//*  *
//****

let n=5,m=4;
let str="";
for(let i=1;i<=n;i++)
{
  for(let j=1;j<=m;j++)
  {
    if((i>1 && i<5) && (j>1 && j<4) )
    str=str+" ";
    else
    str=str+"*";
    
} str=str+"\n";
}
console.log(str);
