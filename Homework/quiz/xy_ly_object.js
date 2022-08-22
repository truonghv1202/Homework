// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
console.log("--- Tính ra số tuổi trung bình của toàn bộ sinh viên ---");
function averageAge(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }

  return sum / arr.length;
}

let listStudent = [
  { name: "Huy", age: 20 },
  { name: "Ba", age: 19 },
  { name: "Thanh", age: 20 },
  { name: "long", age: 21 },
  { name: "Duy", age: 20 },
];

console.log(averageAge(listStudent));
console.log("\n");

// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
console.log("--- sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp ---");
let newListStudent = [
  { name: "Huy", age: 20 },
  { name: "Ba", age: 19 },
  { name: "Thanh", age: 22 },
  { name: "long", age: 21 },
  { name: "Duy", age: 23 },
];

newListStudent.sort(function (user1, user2) {
  return user1.age - user2.age;
});

console.log(newListStudent);
console.log("\n");

// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
console.log("--- sắp xếp lại mảng trên theo tên học viên ---");
let newListStudent1 = [
  { name: "Huy", age: 20 },
  { name: "ba", age: 19 },
  { name: "Thanh", age: 22 },
  { name: "long", age: 21 },
  { name: "Duy", age: 23 },
];

newListStudent1.sort(function (user1, user2) {
  return user1.name.toUpperCase() + user1.name.slice(1).toLowerCase() >
    user2.name.toUpperCase() + user2.name.slice(1).toLowerCase()
    ? 1
    : -1;
});

console.log(newListStudent1);
console.log("\n");
// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
console.log(
  "--- lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''"
);

function nameH(arr) {
  let arrNameH = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name[0] == "H" || arr[i].name[0] == "h") {
      arrNameH.push(arr[i].name);
    }
  }
  return arrNameH;
}

let newListStudent2 = [
  { name: "Huy", age: 20 },
  { name: "ba", age: 19 },
  { name: "Thanh", age: 22 },
  { name: "long", age: 21 },
  { name: "Duy", age: 23 },
  { name: "Hoa", age: 18 },
];

console.log(nameH(newListStudent2));
