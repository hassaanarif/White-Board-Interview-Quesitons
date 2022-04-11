function narcissistic(value) {
  return (
    value ==
    value
      .toString()
      .split("")
      .map((integer) => parseInt(integer))
      .reduce((previous, current, index, array) => {
        return previous + Math.pow(current, array.length);
      }, 0)
  );
}

let value = 371;
console.log(narcissistic(value));
