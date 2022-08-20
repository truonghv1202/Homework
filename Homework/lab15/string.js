/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
console.log("--- viết hoa chữ cái đầu ---");
function capitalize(str) {
  let newStr = str.trim();
  return newStr[0].toUpperCase() + newStr.slice(1).toLowerCase();
}

console.log(capitalize("  javascript is Fun "));
console.log(capitalize("  f88 F88 F88 "));
console.log("\n");

/**
 * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
 *
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
 */
console.log("--- viết hoa chữ cái đầu mỗi từ ---");
function title(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }

  return arr.join(" ");
}
console.log(title("javaScript iS fUn"));
console.log(title("hOaNg vaN tRUong"));
console.log("\n");
/**
 * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {number} Số ký tự nguyên âm có trong chuỗi
 */
console.log("--- nguyên âm ---");
function countVowel(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "u" ||
      str[i] == "e" ||
      str[i] == "o" ||
      str[i] == "a" ||
      str[i] == "i" ||
      str[i] == "U" ||
      str[i] == "E" ||
      str[i] == "O" ||
      str[i] == "A" ||
      str[i] == "I"
    ) {
      count++;
    }
  }

  return count;
}
console.log(countVowel("Hoang Van Truong"));
console.log(countVowel("Ue Oai"));
console.log("\n");

/**
 * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
 *
 * @return {string} Màu ngẫu nhiên
 */
console.log("--- Màu ngẫu nhiên ---");
function randomColor() {
  const hexNumbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexCol = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);

    hexCol += hexNumbers[random];
  }

  return hexCol;
}
console.log(randomColor());
console.log("\n");

/**
 * Đảo ngược thứ tự các từ trong chuỗi
 *
 * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi đảo ngược
 */
console.log("--- Chuỗi đảo ngược ---");
function reverseWords(str) {
  let arr = str.split(" ");
  arr.reverse();

  return arr.join(" ");
}

console.log(reverseWords("The fox is comming for the chicken"));
console.log("\n");

/**
 * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
 *
 * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi URL
 */
console.log("--- Tạo chuỗi URL ---");
function parameterize(str) {
  str.toLowerCase();
  let arr = str.split(" ");
  return arr.join("-");
}

console.log(parameterize("JavaScript is fun"));
