import "./styles.css";

const LOG_ENABLE = false;

/**
 * Crypto.com 考題
 * Chunk
 *
 * ex:
 * Chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
 * Chunk(['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]
 */
const Chunk = (array, num) => {
  const tmp = [];
  array.reduce((acc, cur, index) => {
    if (acc.length < num) {
      if (index === array.length - 1) {
        tmp.push(acc);
      }
    } else {
      tmp.push(acc);
      acc = [];
    }
    acc.push(cur);
    return acc;
  }, []);
  return JSON.stringify(tmp);
};
LOG_ENABLE && console.log(Chunk([1, 2, 3, 4, 5], 3));

/*
 * Delay promise
 */
function delay(time) {
  return new Promise((res) => setTimeout(() => res(), time));
}
async function delayPromise() {
  await delay(5000);
  LOG_ENABLE && console.log("[delayPromise] finish!");
}
LOG_ENABLE && console.log("[delayPromise] start");
delayPromise();

/**
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
LOG_ENABLE && console.log("Flatten: ", ret);

/**
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

LOG_ENABLE && console.log("Fib: ", fib(5));

/**
 * 隨機重新排列
 */
// Solutio 1: 此寫法會有效能問題：若隨機 index 一直都取到相同的數值時
function reRandom(input) {
  let ret = [];
  let inputArr = input;

  for (let i = 0; i < inputArr.length; i++) {
    LOG_ENABLE && console.log("Solution 1, run " + i + " times");
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
    LOG_ENABLE && console.log("Solution 2");
    const randomNum = inputArr[Math.floor(Math.random() * inputArr.length)];
    ret.push(randomNum);
    inputArr.splice(inputArr.indexOf(randomNum), 1);
  }
  return ret;
}

LOG_ENABLE && console.log("reRandom: ", reRandom([1, 3, 4, 5, 7, 0, 9]));
LOG_ENABLE && console.log("reRandom2: ", reRandom2([1, 3, 4, 5, 7, 0, 9]));

/**
 * 二分樹查找，找到數值所在 Index
 */
function binarySearch(arr, num, first, end) {
  let firstIdx = first || 0;
  let lastIdx = end || arr.length - 1;
  let midIdx = Math.floor((firstIdx + lastIdx) / 2);
  if (midIdx === 0) {
    return -1;
  }
  if (num < arr[midIdx]) {
    // left side
    return binarySearch(arr, num, 0, midIdx);
  } else if (num > arr[midIdx]) {
    // right side
    return binarySearch(arr, num, midIdx + 1, arr.length - 1);
  } else {
    return midIdx;
  }
}

// 已排列好的 array
let bsArray = [1, 3, 4, 7, 8, 11, 24];
LOG_ENABLE && console.log("binarySearch index:", binarySearch(bsArray, 2));

/**
 * UDN 買東西考題
 */
var sortName = {
  resorts: ["Andy", "Brian", "Clover"],
  print: function (delay = 1000) {
    // 箭頭函式
    setTimeout(() => {
      LOG_ENABLE && console.log("1 >>", this.resorts.join(","));
    }, delay);
    // 普通函式
    setTimeout(function () {
      LOG_ENABLE && console.log("2 >>", this.resorts);
    }, delay);
  }
};
sortName.print();
