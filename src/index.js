import "./styles.css";

/*
 * Delay promise
 */
function delay(time) {
  return new Promise((res) => setTimeout(() => res(), time));
}
async function delayPromise() {
  await delay(5000);
  console.log("finish!");
}
console.log(delayPromise());

/*
 * Flatten Deep
 *
 * ex:
 * flatten([[1,2,3],[4,5,6],[7,8,9], 10, 11, 12])
 * result -> [1,2,3,4,5,6,7,8,9,10,11,12]
 */
const arr = [[1, 2, 3], [4, 5, 6], [7, [8, [9]]], 10, 11, 12];
const ret = [];
async function flatten(arr) {
  arr.forEach((item) => {
    if (item.length > 0) {
      flatten(item);
    } else {
      ret.push(item);
    }
  });
}

flatten(arr);
console.log("Flatten: ", ret);

/*
 * 費氏數列
 *
 * ex:
 * 1, 1, 2, 3, 5, 8
 * fib(5) -> 8
 */
function fib(indexNum) {
  if (indexNum === 0 || indexNum === 1) {
    return 1;
  } else {
    return fib(indexNum - 1) + fib(indexNum - 2);
  }
}

console.log("Fib: ", fib(5));

// 隨機重新排列
// Solutio 1: 此寫法會有效能問題：若隨機 index 一直都取到相同的數值時
function reRandom(input) {
  let ret = [];
  let inputArr = input;

  for (let i = 0; i < inputArr.length; i++) {
    console.log("Solution 1");
    let index = Math.floor(Math.random() * inputArr.length);
    if (inputArr[index] !== -1) {
      ret.push(inputArr[index]);
      inputArr[index] = -1;
    } else {
      i--;
    }
  }
  return ret;
}

// Solution 2
function reRandom2(input) {
  let ret = [];
  let inputArr = input;
  let inputArrLegth = inputArr.length;
  for (let i = 0; i < inputArrLegth; i++) {
    console.log("Solution 2");
    const randomNum = inputArr[Math.floor(Math.random() * inputArr.length)];
    ret.push(randomNum);
    inputArr.splice(inputArr.indexOf(randomNum), 1);
  }
  return ret;
}

console.log("reRandom: ", reRandom([1, 3, 4, 5, 7, 0, 9]));
console.log("reRandom: ", reRandom2([1, 3, 4, 5, 7, 0, 9]));
