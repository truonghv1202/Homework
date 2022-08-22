// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
console.log("--- viết hoa chữ cái đầu mỗi từ ---");
function title(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }

  return arr.join(" ");
}
console.log(title("HELLO world"));
console.log(title("hOaNg vaN tRUong"));
console.log("\n");

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
console.log("--- Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case ---");
function parameterize(str) {
  let arr = str.toLowerCase().split(" ");
  return arr.join("-");
}

console.log(parameterize("HELLO world"));
console.log(parameterize("hOaNg vaN tRUong"));
console.log("\n");

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''
console.log("--- chuỗi đối xứng ---");
function isPalindrome(str) {
  let arr = str.split(" ").join("").toLowerCase().split("");

  let firstCharacter = arr[0];
  let lastCharactor = arr[arr.length - 1];

  if (firstCharacter === lastCharactor) {
    arr.shift();
    arr.pop();
    if (isEnd(arr)) {
      return true;
    } else {
      let newStr = arr.join("");
      return isPalindrome(newStr);
    }
  }

  return false;
}

function isEnd(arr) {
  return arr.length === 0 || arr.length === 1;
}

let str = "Race car";
let str1 = "Hoang Van truong";
console.log(isPalindrome(str));
console.log(isPalindrome(str1));

// Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey'' và không chứa ''ww''.
