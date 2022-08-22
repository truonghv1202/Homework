// Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.
console.log("--- loại bỏ các giá trị sai trong 1 mảng ---");
function wrongValue(arr) {
  return arr.filter(Number);
}
let array = ["", "1", "2", 3, "4", , undefined, , "5"];
let array1 = [1, 2, , 3, , -3, null, , 0, , undefined, 4, , 4, , 5, , 6, , , ,];
console.log(wrongValue(array));
console.log(wrongValue(array1));
console.log("\n");

// Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
console.log("--- lọc ra các phần tử có độ dài lớn nhất ---");
function lenghtMax(arr) {
  let arrMax = [];
  let max = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= max) {
      max = arr[i].length;
      arrMax.push(arr[i]);
    }
  }
  return arrMax;
}

let arrayMax = ["aba", "aa", "ad", "c", "vcd"];

console.log(lenghtMax(arrayMax));
console.log("\n");

// Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
console.log("--- Phần tử không đồng thời nằm trong 2 mảng truyền vào ---");
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

let list1 = [1, 2, 3];
let list2 = [1, 3, 4, 5, 5];
console.log(difference(list1, list2));
console.log("\n");

// Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau                 [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].
console.log("--- Matrix ---");
function matrix(m, n) {
  let arr = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; i < n; j++) {
      if (i + j >= 0 && i + j <= n - 1)
        arr[i][j] = ((i + j + 1) * (i + j + 2)) / 2 - i;
      else
        arr[i][j] = n * n + n - ((2 * n - i - j - 1) * (2 * n - i - j)) / 2 - i;
    }
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++);
      console.log(arr[i][j]);
    }
  }
}

console.log(matrix(3, 4));
