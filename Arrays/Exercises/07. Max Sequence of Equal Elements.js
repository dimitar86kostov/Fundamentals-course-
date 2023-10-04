function maxSecNums(arr) {
  let longestSeq = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let currentSecuence = [currentNum];
    for (let j = i + 1; j < arr.length; j++) {
      nextNum = arr[j];
      if (currentNum == nextNum) {
        currentSecuence.push(nextNum);
      } else {
        break;
      }
    }
    if (currentSecuence.length > longestSeq.length) {
      longestSeq = currentSecuence;
    }
  }
  console.log(longestSeq.join(' '));
}


maxSecNums([1, 1, 1, 2, 3, 1, 3, 3])
maxSecNums([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSecNums([0, 1, 1, 5, 2, 2, 6, 3, 3])
maxSecNums([2, 2, 3, 3, 3])


/*
let maxCount = 0;
let maxCountDigit = 0;
for (let i = 0; i < arr.length; i++) {
  let curDigit = Number(arr[i]);
  let count = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (Number(arr[j]) == curDigit) {
      count++;
      if (maxCount < count) {
        maxCount = count;
        maxCountDigit = curDigit;
      }
    } else {
      break;
    }
  }
}
let array = new Array(maxCount + 1).fill(maxCountDigit);
console.log(array.join(" "));
*/