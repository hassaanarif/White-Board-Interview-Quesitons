let object = { first: "1st", second: "2nd", third: "3rd" };
let sameObject = object;
let clonedObject = { ...object };

console.table(object);
console.log(sameObject === object);
console.log(clonedObject === object);
console.log(sameObject.first === object.first);
console.log(clonedObject.first === object.first);
