function removeEvenIntegersFromArray(array = []) {
  let output = [];
  for (let currentValue of array) {
    if (currentValue % 2 !== 0) output.push(currentValue);
  }
  return output;
}

console.log(removeEvenIntegersFromArray([1, 2, 3, 4, 5, 6, 7, 8]));
