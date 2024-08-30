//sum of elements of an array using rest and forEach


const sumOfArr=(...arr)=>{
  let total=0;
  arr.forEach((x)=>
  {
    total=total+x;
  })
  return total;
}
console.log(sumOfArr(1,2,5,7,4,5));
