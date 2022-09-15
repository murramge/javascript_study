const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => console.log(fruit));

const fruitss = "🍎, 🥝, 🍌, 🍒";
const newFruits = new Array();
newFruits.push(fruitss);
console.log(newFruits);

const array1 = [1, 2, 3, 4, 5];
array1.reverse();
console.log(array1);

const array2 = [1, 2, 3, 4, 5];
array2.splice(0, 2);
console.log(array2);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// const findstudent = students.find((student) => student.score === 90);
// console.log(findstudent);

const enrollstudent = students.filter((e) => e.enrolled === true);
console.log(enrollstudent);

const scorestudent = [];
students.filter((e) => scorestudent.push(e.score));
console.log(scorestudent);

const scoremid = students.find((e) => e.score <= 50);
console.log(scoremid);

const avg = scorestudent.reduce((acc, cur) => acc + cur) / scorestudent.length;
console.log(avg);

const strscore = scorestudent.toString();
console.log(strscore);

scorestudent.sort();
const str = scorestudent.toString();
console.log(str);
