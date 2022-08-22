// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
console.log("--- Thể tích hình cầu ---");
function sphericalVolume(r) {
  return (4 * Math.PI * Math.pow(r, 3)) / 3;
}

console.log(sphericalVolume(4));
console.log(sphericalVolume(1));
console.log("\n");

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
console.log("--- tính tổng tất cả các số nguyên nằm giữa chúng ---");
function sumInteger(a, b) {
  let sum = 0;
  if (a <= b) {
    for (let i = a + 1; i < b; i++) {
      sum += i;
    }
  } else {
    for (let i = b + 1; i < a; i++) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumInteger(3, 8));
console.log(sumInteger(8, 3));
console.log(sumInteger(9, 3));
console.log("\n");

// Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
console.log("--- tổng tất cả các ước số của số đó ---");
function sumDivisor(n) {
  let sum = 0;
  if (n > 0) {
    for (let i = 0; i <= n; i++) {
      if (n % i == 0) {
        sum += i;
      }
    }
  }
  return sum;
}

console.log(sumDivisor(2));
console.log(sumDivisor(5));
console.log(sumDivisor(4));
console.log("\n");

// Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
console.log("--- xem số đó có phải là số nguyên tố hay không ---");
function prime(n) {
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

console.log(prime(1));
console.log(prime(2));
console.log(prime(5));
console.log(prime(27));
console.log("\n");

// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
console.log(
  "--- Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào ---"
);
function sumPrime(n) {
  let sum = 0;

  if (n < 2) {
    return 0;
  }

  for (let i = 1; i <= n; i++) {
    if (prime(i) == true) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrime(2));
console.log(sumPrime(5));
console.log(sumPrime(11));
console.log(sumPrime(13));
console.log("\n");
