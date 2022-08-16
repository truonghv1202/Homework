// Danh sách sinh viên và quốc gia tương ứng
// Tên sinh viên là key còn quốc gia là value
const guessList = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

for (let key in guessList) {
  console.log("Key:", key);
  console.log("Value:", guessList[key]);
}
console.log("---");
/**
 * Kiểm tra xem `name` có trong `guessList` hay không
 *
 * - Nếu có thì trả về chuỗi theo mẫu: `Hi! I'm [name], and I'm from [country]!`
 * - Nếu không có thì trả về chuỗi theo mẫu: `Hi! I'm guess.`
 *
 * @param {string} name Tên bất kỳ
 *
 * @return {string} Câu chào
 */
function greeting(name) {
  for (let key in guessList) {
    if (name === key) {
      console.log("Hi! I'm " + name + " and I'm from " + guessList[name]);
      break;
    } else {
      console.log("Hi! I'm guess.");
    }
  }
}

greeting("Randy");
greeting("Karla");
greeting("Wendy");
greeting("Norman");
greeting("Sam");

console.log("---");

// Danh sách thành viên trong 1 gia đình
// Tên là key, tuổi là value
const myFamily = {
  Fred: 34,
  Susan: 32,
  Emily: 8,
  Tom: 5,
};

for (let key in myFamily) {
  console.log("Key:", key);
  console.log("Value:", myFamily[key]);
}
console.log("---");

/**
 * Tính xem sau `n` năm nữa thì các thành viên trong gia đình bao nhiêu tuổi
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} obj Danh sách thành viên trong gia đình
 * @param {number} n Số năm bất kỳ
 *
 * @return {{[key: string]: number}} Danh sách thành viên và số tuổi tương ứng sau `n` năm
 */

function afterNYears(obj, n) {
  const newMyFamily = {};
  for (let key in myFamily) {
    newMyFamily[key] = myFamily[key];
  }
  for (let key in newMyFamily) {
    newMyFamily[key] += n;
  }
  console.log(newMyFamily);
  return newMyFamily;
}

afterNYears(1, 10);
afterNYears(1, 15);
console.log("---");

/**
 * Đảo ngược key thành value, value thành key của một object bất kỳ
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{key: string}: any} obj Object bất kỳ
 *
 * @return {[key: string]: string} Object mới sau khi đảo ngược
 */
function invert(obj) {
  let newInvert = myFamily;

  let temp;
  for (let key in newInvert) {
    temp = key;
    key = newInvert[key];
    newInvert[key] = temp;
    console.log("Key:", key);
    console.log("Value:", newInvert[key]);
  }

  console.log(newInvert);
  return newInvert;
}

invert();
console.log("---");

// Danh sách items
// Key là tên, value là giá trị tương ứng
const items = {
  tv: 300,
  ipad: 1000,
};

for (let key in items) {
  console.log("Key:", key);
  console.log("Value:", items[key]);
}
console.log("---");

/**
 * Tính tổng giá trị (value) các items trong object đầu vào
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {number} Tổng giá trị các items
 */
function totalAmount(item) {
  let sum = 0;
  for (let key in items) {
    sum += items[key];
  }
  return sum;
}
console.log(totalAmount(items));
console.log("---sum");
/**
 * Lọc và trả về danh sách các items có giá trị cao (value >= 1000) trong danh sách đầu vào
 *
 * Lưu ý: Object ban đầu không được phép thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {{[key: string]: number}} Danh sách các items có giá trị cao
 */
function expensiveItems(item) {
  const newIteams = {};
  for (let key in items) {
    if (items[key] >= 1000) {
      newIteams[key] = items[key];
    }
  }
  console.log(newIteams);
  return newIteams;
}
expensiveItems();
console.log("---");
