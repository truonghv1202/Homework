//Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
console.log("--- 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t ---");
function LastSecond(t, x) {
  let str = [];
  let arr = t.split(":");
  //   let hour = x / 3600;
  let minute = x / 60;
  let second = x % 60;
  if (x <= 1000) {
    if (arr[2] + second < 60 && arr[1] + minute < 60) {
      arr[2] += second;
      arr[1] += minute;
    } else if (arr[2] + second > 60 && arr[1] + minute < 60) {
      arr[2] = arr[2] + second - 60;
      arr[1] = arr[1] + 1;
    } else if (arr[2] + second < 60 && arr[1] + minute > 60) {
      arr[2] += second;
      arr[1] += minute - 60;
      arr[0] += 1;
    } else if (arr[2] + second > 60 && arr[1] + minute > 60) {
      arr[2] = arr[2] + second - 60;
      arr[1] = arr[1] + minute - 60;
      arr[0] += 1;
    }
  }

  return arr.join(":");
}

console.log(LastSecond("09:20:56", 7));

// Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).

function snail(h, x, y) {
  let day = x - y;

  if (h > 0 && x > 0 && y > 0 && x > y) {
    return h / day;
  } else return NAN;
}
console.log(snail(20, 4, 3));

// Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.
function sortNumber(n) {
  let arr = [];
  let value = n;
  let temp;
  while (value > 0) {
    temp = value % 10;
    arr.push(temp);
    value = (value - (value % 10)) / 10;
  }

  let arrAscending = arr.sort();
  if (arr[0] == 0) {
    let tmp = arr[0];
    arr[0] = arr[1];
    arr[1] = tmp;
  }

  let newNumber = arrAscending.join("");
  return newNumber;
}
console.log(sortNumber(530751));
console.log(sortNumber(532751));
