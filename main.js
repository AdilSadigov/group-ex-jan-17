let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

console.log(data);

function sortArray(arr) {
  let result = arr.sort((a, b) => a - b);
  return result;
}

let sorted = sortArray(data)
console.log(sorted)

function getTotal(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum;
}

let total = getTotal(data)
console.log(total)

function even (x) {
  result = x % 2;
  if (result === 0) {
    return true;
  }
  else {
    return false;
  }
}

let isEven = even(data)
console.log(isEven)

function getEven(arr) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (even(arr[i])) {
      v.push(arr[i])
    }
  }
  return v;
}

function getOdd(arr) {
  let v = [];
  for (let i = 0; i < arr.length; i++) {
    if (!even(arr[i])) {
      v.push(arr[i])
    }
  }
  return v;
}

console.log(getEven(data))

console.log(getOdd(data))

function a (arr){
  let sumOdd = getTotal(getOdd(arr));
  let sumEven = getTotal(getEven(arr));
  if (sumOdd > sumEven) {
    return getOdd(arr)
  }
  else {
    return getEven(arr)
  }
}

let e = a(data)
console.log(e)
