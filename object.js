const obj1 = {};
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };

print(ellie);

ellie.hasJob = true;

delete ellie.hasJob;
