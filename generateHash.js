function generateHashtag(str = "") {
  if (str.length == 0 || str.trim().length == 0) return false;
  let result = `#${str
    .trim()
    .split(" ")
    .map((word) => {
      return word.trim().length == 0
        ? ""
        : `${word[0].toUpperCase()}${word.slice(1)}`;
    })
    .join("")}`;
  return result.length > 140 ? false : result;
}

let string = "   cocacola is  one of the top brands in the world ";
console.log(generateHashtag(string));
