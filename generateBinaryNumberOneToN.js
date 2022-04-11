function generateBinaryNumber(N) {
  if (N == 0) return "0";
  if (N == 1) return "1";

  let output = "01";
  // 2 -> 3/2 = 1, 3%2, 1
  for (let i = 2; i <= N; i++) {
    let temp = "";
    let divisor = 2;
    let dividend = i;
    let remainder = 0;
    while (dividend >= 1) {
      let quotient = Math.floor(dividend / divisor);
      remainder = dividend % divisor;
      temp += remainder;
      dividend = quotient;
    }
    temp = temp.split("").reverse().join("");
    output = output + `, ${temp}`;
  }
  return output;
}

console.log(generateBinaryNumber(5));
