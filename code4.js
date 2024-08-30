//increasin sequence checke

const what=(arr)=>{
  for(let i=1;i<arr.length;i++)
  {
    if(arr[i]<arr[i-1])return false;
  }
  return true;
}
console.log(what([1,2,4,7]));
console.log(what([5,2,4,7]));
