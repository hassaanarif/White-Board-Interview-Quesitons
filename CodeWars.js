function anagrams(word = "", words) {
  let resultArray = [];
  let sortedWordArray = word.split("").sort().join();

  for (let currentWord of words) {
    if (currentWord.length !== word.length) continue;
    let sortedComparisonArray = currentWord.split("").sort().join();
    if (sortedComparisonArray === sortedWordArray)
      resultArray.push(currentWord);
  }
  return resultArray;
}

console.log(anagrams("abba", ["baab", "bbbb", "baba", "a", "bb"]));
