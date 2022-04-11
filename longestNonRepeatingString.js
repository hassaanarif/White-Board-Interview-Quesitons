var lengthOfLongestSubstring = function (string) {
  if (!string) {
    return 0;
  }

  let start = 0;
  let currentIndex = 0;
  let maxLength = 0;
  let uniqueCharacters = new Set();

  while (currentIndex < string.length) {
    let currentCharacter = string[currentIndex];

    if (!uniqueCharacters.has(currentCharacter)) {
      uniqueCharacters.add(currentCharacter);
      currentIndex++;
      maxLength = Math.max(maxLength, uniqueCharacters.size);
    } else {
      uniqueCharacters.delete(string[start]);
      start++;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("01"));
