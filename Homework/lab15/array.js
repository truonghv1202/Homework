/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
console.log("--- Sổ nhỏ nhất trong mảng ---");
function min(arrayMin) {
  let min = arrayMin[0];
  for (let index = 0; index < arrayMin.length; index++) {
    if (arrayMin[index] < min) {
      min = arrayMin[index];
    }
  }
  return min;
}

let arrayMin = [1, 2, 4, 5, 7, 6, 0, -1];
console.log(min(arrayMin));
console.log("\n");

/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
console.log("--- Số lớn nhất trong mảng ---");
function max(arrMax) {
  let max = arrMax[0];

  for (let index = 0; index < arrMax.length; index++) {
    if (arrMax[index] > max) {
      max = arrMax[index];
    }
  }
  console.log(max);
  return max;
}
let arrMax = [1, 2, 4, 5, 7, 6];
max(arrMax);
console.log("\n");

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
console.log("--- Mảng chứa giá trị nhỏ nhất và lớn nhất ---");
function minMax(arr) {
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }

  let max = arr[0];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }

  return [min, max];
}
let num = [1, 2, 4, 5, 7, 6, 10];

console.log(minMax(num));
console.log("\n");

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
console.log("--- Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y) ---");
function swap(arr, x, y) {
  let temp;
  temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;

  console.log(arr);
}
let numbers = [1, 2, 3, 4, 5, 6, 7];
swap(numbers, 2, 3);
swap(numbers, 0, 6);
console.log("\n");

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
console.log("--- Tìm các số xuất hiện trong cả 2 mảng ---");
function intersection(arr1, arr2) {
  let arr = [];

  for (const number of arr1) {
    if (arr2.includes(number)) {
      arr.push(number);
    }
  }

  return arr;
}
let num1 = [1, 2, 3, 4, 5];
let num2 = [3, 4, 5, 6, 7, 5];
console.log(intersection(num1, num2));
console.log("\n");

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
console.log("--- Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng ---");
function difference(arr1, arr2) {
  const result = [];

  for (const number of arr1) {
    if (!arr2.includes(number)) {
      result.push(number);
    }
  }

  for (const number of arr2) {
    if (!arr1.includes(number)) {
      result.push(number);
    }
  }
  return result;
}

let list1 = [1, 2, 3, 4, 5];
let list2 = [3, 4, 5, 6, 7];
console.log(difference(list1, list2));
console.log("\n");

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
console.log(
  "--- Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất ---"
);
function removeDuplicate(arr) {
  // return Array.from(new Set(arr));
  // arr.splice(0, arr.length, new Set(arr));
  const temp = [];
  for (let number of arr) if (!temp.includes(number)) temp.push(number);

  arr.length = 0;
  for (let number of temp) arr.push(number);
}
const listNumbers = [1, 2, 3, 3, 4, 4, 5];
removeDuplicate(listNumbers);
console.log(listNumbers);
console.log("\n");

/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
console.log("--- Tìm số lớn thứ 2 trong mảng ---");
function secondLargest(arr) {
  let max = arr[0];
  let max2 = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }

  for (let index = 0; index < arr.length - 1; index++) {
    if (max == arr[index]) {
      continue;
    } else if (max2 < arr[index]) {
      max2 = arr[index];
    }
  }
  console.log(max2);
  return max2;
}
let numbersMax = [1, 2, 5, 3, 6, 7, 10, 8, 11];
let numbersMax2 = [1, 2, 3, 4, 5, 5, 2, 3, 5, 6, 7];
secondLargest(numbersMax);
secondLargest(numbersMax2);
console.log("\n");

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
console.log("--- Xáo trộn vị trí các phần tử trong một mảng ---");
function shuffle(arr) {
  arr = arr.sort(() => Math.random() - 0.5);
  return arr;
}

let arrays = [1, 5, 3, 6, 3, 6, 3, 7];
console.log(shuffle(arrays));
