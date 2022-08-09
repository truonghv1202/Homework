/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
function maxOfThree(a, b, c) {
  if (a <= c && b <= c) {
    return c;
  } else if (a <= b && c <= b) {
    return b;
  } else if (b <= a && c <= a) {
    return a;
  }
}

console.log("Max = " + maxOfThree(3, 56, 34));

/**
 * Tìm mùa tương ứng với tháng
 *
 * - Winter (mùa đông): 12, 1, 2
 * - Spring (mùa xuân): 3, 4, 5
 * - Summer (mùa hạ): 6, 7, 8
 * - Fall (mùa thu): 9, 10, 11
 *
 * @param {number} month Tháng trong năm
 *
 * @return {number} Mùa tương ứng với tháng (Winter | Spring | Summer | Fall)
 */
function findSeason(month) {
  let season;
  switch (month) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      return season;

    case 3:
    case 4:
    case 5:
      season = "Spring";
      return season;

    case 6:
    case 7:
    case 8:
      season = "Summer";
      return season;

    case 9:
    case 10:
    case 11:
      season = "Fall";
      return season;

    default:
      return NaN;
  }

  // if (month == 12 || month == 1 || month == 2) {
  //   season = "Winter";
  //   return mua;
  // } else if (month == 3 || month == 4 || month == 5) {
  //   season = "Spring";
  //   return mua;
  // } else if (month == 6 || month == 7 || month == 8) {
  //   season = "Summer";
  //   return mua;
  // } else if (month == 9 || month == 10 || month == 11) {
  //   season = "Fall";
  //   return mua;
  // } else {
  //   return NaN;
  // }
}
console.log(findSeason(8));
console.log(findSeason(2));
console.log(findSeason(15));
/**
 * Kiểm tra xem một năm có phải năm nhuận hay không
 *
 * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không chia hết cho `100`,
 * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận nếu nó cũng chia hết cho `400`
 *
 * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
 * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
 * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
 *
 * @param {number} year Năm bất kỳ
 *
 * @return {boolean} Năm này có phải năm nhuận hay không
 */
function isLeafYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeafYear(2000));
console.log(isLeafYear(2100));

/**
 * Tìm số ngày trong tháng
 *
 * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
 * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
 * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
 *
 * @param {number} month Tháng bất kỳ
 * @param {number} year Năm bất kỳ
 *
 * @return {number} Số ngày trong tháng đó
 */
function findDayOfMonth(month, year) {
  let day;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = 31;
      return day;

    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      return day;

    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        day = 29;
      } else {
        day = 28;
      }
      return day;

    default:
      return NaN;
  }
}

console.log("Tháng có " + findDayOfMonth(2, 2021) + " ngày");
console.log("Tháng có " + findDayOfMonth(2, 2020) + " ngày");
console.log("Tháng có " + findDayOfMonth(8, 2020) + " ngày");
/**
 * Xếp loại sinh viên theo số điểm trung bình
 *
 * @param {number} point Điểm trung bình của sinh viên
 *
 * @return {'A' | 'B' | 'C' | 'D' | 'F'} Xếp hạng tốt nghiệp của sinh viên
 * < 4 F
 * < 5.5 D
 * < 7.0 C
 * < 8.5 B
 * < 10 A
 */
function calcGrade(point) {
  return point < 4
    ? "F"
    : 4 <= point && point < 5.5
    ? "D"
    : 5.5 <= point && point < 7.0
    ? "C"
    : 7 <= point && point < 8.5
    ? "B"
    : 8.5 <= point && point <= 10
    ? "A"
    : NaN;
  // let classification;
  // if (point < 4) {
  //   classification = "F";
  //   return classification;
  // } else if (4 <= point && point < 5.5) {
  //   classification = "D";
  //   return classification;
  // } else if (5.5 <= point && point < 7.0) {
  //   classification = "C";
  //   return classification;
  // } else if (7 <= point && point < 8.5) {
  //   classification = "B";
  //   return classification;
  // } else if (8.5 <= point && point <= 10) {
  //   classification = "A";
  //   return classification;
  // } else {
  //   return NaN;
  // }
}

console.log(calcGrade(3));
console.log(calcGrade(10));
console.log(calcGrade(11));

/**
 * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
 *
 * - Phí mở cửa cố định là `10.000đ`
 * - Giá cho `30km` đầu tiên là `11.000đ/km`
 * - Từ kilomet thứ `31` giá là `9.500đ/km`
 * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
 *
 * @param {number} km Số kilomet đã di chuyển
 *
 * @return {number} Số tiền phải trả
 */
function calcTaxiFee(km) {
  return km <= 30 && km > 0
    ? 10_000 + km * 11_000
    : km > 30
    ? (km - 30) * 9_500 + 30 * 11_000 + 10_000
    : "0";
}

console.log(calcTaxiFee(14) + " đ");
console.log(calcTaxiFee(50) + " đ");
console.log(calcTaxiFee(70) + " đ");
console.log(calcTaxiFee(-2) + " đ");

/**
 * Tìm nghiệm phương trình bậc 2: ax^2 + bx + c = 0
 *
 * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
 * - Nếu phương trình vô nghiệm thì trả về `null`
 * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
 * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
 *
 * @param {number} a Tham số a
 * @param {number} b Tham số b
 * @param {number} c Tham số c
 *
 * @return {number | [number, number] | null} Nghiệm phương trình
 */
function solveEquation(a, b, c) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (a == 0) {
    return Math.round((-c / b) * 100) / 100;
  } else {
    if (delta < 0) {
      return null;
    } else if (delta == 0) {
      return Math.round((-b / (2 * a)) * 100) / 100;
    } else {
      return [
        Math.round(((-b + Math.sqrt(delta, 2)) / (2 * a)) * 100) / 100,
        Math.round(((-b - Math.sqrt(delta, 2)) / (2 * a)) * 100) / 100,
      ];
    }
  }
}

console.log(solveEquation(0, 5, 4));
console.log(solveEquation(1, -4, 4));
console.log(solveEquation(3, 4, 5));
console.log(solveEquation(3, -5, 0));
console.log(solveEquation(-2, 3, 5));
console.log(solveEquation(2, 0, -8));
