

//replece an element with another element
const newArray = (arr, rep, what) => {
  arr.forEach((element, index) => {
    if (element === rep) {
      arr[index] = what;
    }
  });
  console.log(arr);
}

newArray([1, 2, 5, 1, 8, 1], 1, 3);
