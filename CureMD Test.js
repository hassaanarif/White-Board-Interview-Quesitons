let A = [1, 2, 3, 4, 5];
let K = 4;

function getResult(A) {
  let arrayLength = A.length;
  if (arrayLength == 0 || K == 1) return 0;

  let firstElement = parseInt(A[0]);
  if (arrayLength == 1) {
    if (firstElement >= K) return 0;

    return arrayLength;
  }

  let sortedArray = A.sort((a, b) => a - b);
  let lastElement = parseInt(sortedArray[arrayLength - 1]);

  if (K >= lastElement) return arrayLength;

  let subArrayLength = arrayLength;
  let sumOfIntegers = 0;
  let avg = K;

  while (avg >= K) {
    for (let i = 0; i < subArrayLength; i++) {
      sumOfIntegers += parseInt(sortedArray[i]);
    }
    avg = sumOfIntegers / subArrayLength;
    subArrayLength--;
    sumOfIntegers = 0;
  }

  return subArrayLength + 1;
}

console.log(getResult(A));
