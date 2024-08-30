//making border with stars*


const border=(arr)=>{
  let str="*".repeat(arr[0].length+2);
  arr.unshift(str);
  arr.push(str);
  for(let i=1;i<arr.length-1;i++)
  arr[i]="*"+arr[i]+"*";

  console.log(arr);

}

border(["eff","i"]);
