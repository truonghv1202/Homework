/**
 * Trả về chuỗi đại diện cho ngày hôm nay theo định dạng VN
 *
 * Ví dụ: 01/10/2022 (lưu ý, ngày tháng đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi ngày tháng
 */
console.log("--- Chuỗi ngày tháng ---");
function currentDate() {
  let time = new Date();
  return time.toLocaleString("vi-VN", {
    dateStyle: "full",
  });
}

console.log(currentDate());
console.log("\n");

/**
 * Trả về chuỗi đại diện cho thời gian hiện tại
 *
 * Ví dụ: 10:30:59 (lưu ý, giờ, phút, giây đầy đủ 2 chữ số)
 *
 * @returns {string} Chuỗi thời gian
 */
console.log("--- Chuỗi giờ ---");
function currentTime() {
  let time = new Date();
  return time.toLocaleTimeString();
}
console.log(currentTime());
console.log("\n");

/**
 * Tìm thứ trong tuần tương ứng với ngày hiện tại
 *
 * Ví dụ: T2, T3, ..., CN
 *
 * @returns {string} Thứ tương ứng
 */
console.log("--- Thứ tương ứng ---");
function todayWeekday() {
  let time = new Date();
  let currentDay = time.getDay();
  let dayName;
  switch (currentDay) {
    case 0:
      dayName = "Chủ Nhật";
      break;
    case 1:
      dayName = "Thứ Hai";
      break;
    case 2:
      dayName = "Thứ Ba";
      break;
    case 3:
      dayName = "Thứ Tư";
      break;
    case 4:
      dayName = "Thứ Năm";
      break;
    case 5:
      dayName = "Thứ Sáu";
      break;
    case 6:
      dayName = "Thứ Bảy";
      break;

    default:
      break;
  }

  return dayName;
}

console.log(todayWeekday());
console.log("\n");

/**
 * Tìm ngày cuối cùng của tháng
 *
 * @param {Date} date - Ngày bất kỳ
 *
 * @returns {Date} Ngày cuối tháng
 */
console.log("--- Ngày cuối tháng ---");
function getLastDayOfMonth(date) {
  let year = date.getFullYear();
  let currentMonth = date.getMonth();
  let lastDay;

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    switch (currentMonth) {
      case 00:
        lastDay = 31;
        break;

      case 01:
        lastDay = 29;
        break;

      case 02:
        lastDay = 31;
        break;

      case 03:
        lastDay = 30;
        break;

      case 04:
        lastDay = 31;
        break;

      case 05:
        lastDay = 30;
        break;

      case 06:
        lastDay = 31;
        break;

      case 07:
        lastDay = 31;
        break;

      case 08:
        lastDay = 30;
        break;

      case 09:
        lastDay = 31;
        break;

      case 10:
        lastDay = 30;
        break;

      case 11:
        lastDay = 31;
        break;

      default:
        break;
    }
  } else {
    switch (currentMonth) {
      case 00:
        lastDay = 31;
        break;

      case 01:
        lastDay = 28;
        break;

      case 02:
        lastDay = 31;
        break;

      case 03:
        lastDay = 30;
        break;

      case 04:
        lastDay = 31;
        break;

      case 05:
        lastDay = 30;
        break;

      case 06:
        lastDay = 31;
        break;

      case 07:
        lastDay = 31;
        break;

      case 08:
        lastDay = 30;
        break;

      case 09:
        lastDay = 31;
        break;

      case 10:
        lastDay = 30;
        break;

      case 11:
        lastDay = 31;
        break;

      default:
        break;
    }
  }
  return lastDay;
}

let now = new Date("2000-02-02");
let now1 = new Date("1999-02-02");
console.log(getLastDayOfMonth(now));
console.log(getLastDayOfMonth(now1));
console.log("\n");

/**
 * Tính số ngày đến tết dương lịch năm sau
 *
 * @returns {number} Số ngày cho đến tết dương lịch năm sau
 */
console.log("--- Số ngày cho đến tết dương lịch năm sau ---");
function getDaysToNextYear() {
  let now = new Date();
  let nextYear = new Date("2023-01-01");

  let milliseconds = nextYear.getTime() - now.getTime();

  let day = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  return day;
}
console.log(getDaysToNextYear());
console.log("\n");

/**
 * Tính số ngày cho đến sinh nhật tiếp theo
 *
 * @param {number} month Tháng sinh
 * @param {number} day Ngày sinh
 *
 * @return {number} Số ngày cho đến sinh nhật tiếp theo
 */
console.log("--- Số ngày cho đến sinh nhật tiếp theo ---");
function getDaysToNextBirthday(month, day) {
  let birthday = new Date();

  let nextBirthday = new Date();
  nextBirthday.setDate(day);
  nextBirthday.setMonth(month);
  nextBirthday.setFullYear(2023);

  let milliseconds = nextBirthday.getTime() - birthday.getTime();
  let numberDay = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  return numberDay;
}
console.log(getDaysToNextBirthday(01, 02));
console.log(getDaysToNextBirthday(00, 01));
console.log("\n");

/**
 * @typedef {Object} user
 * @property {string} fullname - Họ tên
 * @property {string} dateOfBirth - Ngày sinh
 */

/**
 * Kiểm tra xem ai có sinh nhật vào hôm nay
 *
 * @param {user[]} users Danh sách người dùng
 *
 * @return {user[]} Danh sách người có sinh nhật vào hôm nay
 */
console.log("--- Danh sách người có sinh nhật vào hôm nay ---");
function todayBirthday(users) {
  let usersBirthday = [];

  let now = new Date();
  now.getMonth();
  now.getDate();
  let birthday;
  if (now.getMonth() < 10) {
    birthday = [now.getDate(), "0" + (now.getMonth() + 1)];
  } else if (now.getDate() < 10) {
    birthday = ["0" + now.getDate(), now.getMonth() + 1];
  } else if (now.getMonth() < 10 && now.getDate() < 10) {
    birthday = ["0" + now.getDate(), "0" + (now.getMonth() + 1)];
  } else {
    birthday = [now.getDate(), now.getMonth() + 1];
  }

  let birthdaySrings = birthday.join("-");
  let count = 0;

  for (let i = 0; i < users.length; i++) {
    let str = users[i].dateOfBirth.split("-").splice(0, 2).join("-");

    if (str == birthdaySrings) {
      count++;
      usersBirthday.push(users[i].fullname);
    }
  }
  console.log("Có " + count + " người có ngày sinh nhật hôm nay: ");

  return usersBirthday;
}

let listUsers = [
  { fullname: "Ba", dateOfBirth: "21-08-1992" },
  { fullname: "Đăng", dateOfBirth: "20-08-2000" },
  { fullname: "Tuấn", dateOfBirth: "20-08-2001" },
  { fullname: "Phi", dateOfBirth: "21-08-2002" },
  { fullname: "Hoàng", dateOfBirth: "22-08-2003" },
  { fullname: "Trường", dateOfBirth: "20-08-1996" },
  { fullname: "Hải", dateOfBirth: "23-08-1996" },
  { fullname: "Hiếu", dateOfBirth: "24-08-1996" },
];

console.log(todayBirthday(listUsers));
