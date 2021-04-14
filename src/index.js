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
