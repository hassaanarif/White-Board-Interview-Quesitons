let input = "Radar";

// METHOD 1 (FUNCTIONAL PROGRAMMING)

function checkPalindrome(input) {
  if (input.length === 0) return true;

  input = input.toLocaleLowerCase();

  for (let index = 0; index < input.length; index++) {
    let left = index;
    let right = input.length - 1 - index;
    if (input[left] !== input[right]) return false;
  }
  return true;
}

// METHOD 2

function checkPalindromeShort(input = "") {
  if (input.length === 0) return true;
  return (
    input.toLocaleLowerCase() ===
    input.toLocaleLowerCase().split("").reverse().join("")
  );
}
