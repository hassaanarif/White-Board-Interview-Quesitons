// function rotateList(List, k) {
//   let current = head;
//   let previous = head;
//   for (let i = 0; i <= k; i++) {
//     current = current.next;
//   }
//   while (current.next) {
//     current = current.next;
//     previous = previous.next;
//   }
//   current.next = head;
//   head = previous.next;
//   previous.next = null;
// }

// //TODO {t: 2, e: 1, s: 1}

// function checkAnagram(s1 = "", s2 = "") {
//   let HM = new Map();
//   for (let character of s1) {
//     if (!HM.has(character)) {
//       HM.put(character, 1);
//       break
//     }
//     HM.get(character)++;
//   }

//   for(let character of s2){
//     if (HM.has(character))  {HM.get(character)--}
//   }

//   for(let key in HM){
//       if (key > 0) return false //assuming key would return the value
//   }
//   return true
// }

// function checkMissingInteger(array=[], N) {
//     let sum1 = 0
//     for (let i = 1; i<= N; i++){
//         sum+=i
//     }

//     let sum2 =0
//     for(let i in array){
//         sum2+=i
//     }

//     return sum1 - sum2
// }

// //* Let's consider that array is full and no integer is missing
// //* Length of array would be equal to N starting from 1 ... N
// //* Calculate the Sum of the values in the Array and store it in Sum1 Variable

// //? Now calculate the sum of values in the given array (with the missing integer)
// //? This sum would be less than the Sum1
// //? Now take the difference of Sum1 and Sum2 that would give you the missing integer
M[(1, 2, 3, 4, 5, 6, 7)];
K;
function findLowestIndex(array = [], length) {
  let middleIndex = length / 2;
  let current = array[middleIndex];
  while (middleIndex) {
    if (current > key) middleIndex--;
    else if (current < key) middleIndex++;

    if (Array[middleIndex - 1] !== key) return Array[middleIndex];
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next;
    this.previous;
  }
}

let node = (head = new Node());

function conversion(root, next, previous) {
  if (!root) return;
  conversion(node.left, node.next, node.previous);
  let node = new Node(root.value);
  node.next = next;
  node.previous = previous;
  conversion(node.right, node.next, node.previous);
}
