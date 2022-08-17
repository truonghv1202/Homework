/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
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

/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
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

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
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

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
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
console.log("---");

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }

  return arr;
}
let num1 = [1, 2, 3, 4, 5];
let num2 = [3, 4, 5, 6, 7, 5];
console.log(intersection(num1, num2));
console.log("---");

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }
  return arr;
}
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [3, 4, 5, 6, 7];
console.log(difference(nums1, nums2));
console.log("---");

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j) {
      if (arr[i] == arr[j]) {
        arr.pop(arr[i]);
      }
    }
  }

  return arr;
}
let remove = [1, 2, 3];
console.log(removeDuplicate(remove));
console.log("--1");

/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {}
console.log("---1123");

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr) {}
