/**
 * Kiểm tra số một số nguyên dương bất kỳ có phải số nguyên tố hay không
 *
 * Số nguyên tố là số chỉ chia hết cho `1` và chính nó
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` cho có phải số nguyên tố hay không
 */
function isPrime(n) {
  if (n == 2 || n == 3) {
    return true;
  } else if (n < 2 || n % 2 == 0) {
    return false;
  } else {
    for (let i = 3; i < n; i++) {
      if (n % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(27));
console.log(isPrime(13));
console.log(isPrime(17));

console.log("---");

/**
 * Tính tổng các số nguyên tố trong khoảng từ 1 đến n
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {number} Tổng các số nguyên tố trong khoảng từ `1` đến `n`
 */
function sumOfPrimes(n) {
  let sum = 0;

  if (n < 2) {
    return 0;
  }

  for (let i = 1; i <= n; i++) {
    if (isPrime(i) == true) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfPrimes(2));
console.log(sumOfPrimes(3));
console.log(sumOfPrimes(7));
console.log(sumOfPrimes(1));
console.log(sumOfPrimes(10));
console.log(sumOfPrimes(13));
console.log(sumOfPrimes(17));
console.log("---");

/**
 * Tìm số Fibonacci thứ n
 *
 * Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số tiếp theo bằng tổng 2 số trước nó
 *
 * VD: 0 1 1 2 3 5 8 13 ... (Số thứ 1 là 0, số thứ 2 là 1, số thứ 3 là 2, ...)
 *
 * VD: `n = 5`, kết quả số Fibonacci thứ 5 là `3`
 *
 * @param {number} n Số nguyên dương bất kỳ (n > 0)
 *
 * @return {number} Số Fibonacci thứ `n`
 */
function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let temp;
  for (let i = 1; i <= n; i++) {
    // console.log(n1);
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }
  console.log("Số Fibonacci thứ", n + " là:", temp - n1);
}
//   console.log(n1);
//   console.log(n2);

//   temp = n1 + n2;
//   while (temp <= n) {
//     console.log(temp);

//     n1 = n2;
//     n2 = temp;
//     temp = n1 + n2;
//   }
// }

fibonacci(4);
fibonacci(5);
fibonacci(6);
fibonacci(8);

console.log("---");

/**
 * Tính giai thừa của một số nguyên bất kỳ
 *
 * Giai thừa của một số `n = 1 * 2 * 3 * ... * (n - 1) * n`
 *
 * @param {number} n Số nguyên dương bất kỳ (n >= 0)
 *
 * @return {number} Giai thừa của `n`
 */
function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(6));
console.log("---");

/**
 * Kiểm tra một số nguyên dương bất kỳ có phải số Strong hay không
 *
 * Số Strong là số có tổng giai thừa các chữ số bằng chính nó
 *
 * VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` có phải là số Strong hay không
 */
function isStrong(n) {
  let sum = 0;
  let m = n;
  while (n > 1) {
    let x = n % 10; // lấy từng số hạng ra lũy thừa
    sum += factorial(x);
    n = n / 10;
  }

  if (sum == m) {
    return true;
  } else {
    return false;
  }
}

console.log(isStrong(145));
console.log(isStrong(111));
console.log(isStrong(43));
console.log(isStrong(250));
console.log("---");
