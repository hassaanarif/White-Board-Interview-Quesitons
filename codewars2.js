function dirReduc(array) {
  let directions = {
    NORTH: 1,
    SOUTH: -1,
    EAST: 2,
    WEST: -2,
  };

  let convertedArray = array.map((dir) => {
    return directions[dir];
  });

  let finalArray = [];
  for (let index = 0; index < convertedArray.length; index++) {
    if (convertedArray[index] + finalArray[finalArray.length - 1] == 0) {
      finalArray.pop();
      continue;
    }
    if (convertedArray[index] + convertedArray[index + 1] == 0) {
      index = index + 1;
    } else finalArray.push(convertedArray[index]);
  }
  return finalArray.map((val) => {
    return Object.keys(directions)
      .filter((currentValue) => directions[currentValue] == val)
      .toString();
  });
}

let array = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
console.log(dirReduc(array));
