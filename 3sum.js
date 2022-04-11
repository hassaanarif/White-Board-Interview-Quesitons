let array = [-3, 2, 0, -5, 1, 5];

let K = 0;

function threeSum(array = [], K) {
  array = array.sort((a, b) => a - b);

  let output = [];

  for (let i = 0; i <= array.length; i++) {
    let current = array[i];
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let threeSum = current + array[left] + array[right];
      if (threeSum == K) {
        output.push([current, array[left], array[right]]);
        break;
      } else {
        let remaining = K - current;
        if (array[left] + array[right] > remaining) {
          right = right - 1;
        } else left = left + 1;
      }
    }
  }

  return output;
}

console.log(threeSum(array, K));
