const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits.length - 1);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let value of fruits) {
  console.log(value);
}

fruits.forEach((fruit) => console.log(fruit));

fruits.push("딸기", "복숭아");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.pop();

fruits.unshift("레몬", "키위");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.push("딸기", "복숭아", "레몬");
console.log(fruits);

fruits.splice(1, 1, "수박", "참외");
console.log(fruits);

const fruits2 = ["배", "코코넛"];

const newFruits = fruits.concat(fruits2);

console.log(newFruits);

console.clear();
console.log(fruits);
console.log(fruits.indexOf("수박"));
console.log(fruits.includes("수박"));
console.log(fruits.includes("가지"));
console.log(fruits.indexOf("가지"));

console.clear();
fruits.push("사과");
console.log(fruits.indexOf("사과"));
console.log(fruits.lastIndexOf("사과"));
