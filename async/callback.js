// console.log("1");
// setTimeout(() => console.log("2"), 1000);

// console.log("3");

// function printImmediately(print) {
//   print();
// }

// printImmediately(() => console.log("hello"));

// function printWithDelay(print, timeout) {
//   setTimeout(print, timeout);
// }

// printWithDelay(() => console.log("async callback"), 2000);

//콜백지옥예제

console.clear();

class userStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "coding")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const id = prompt("id please");
const password = prompt("password please");

const storage = new userStorage();
storage.loginUser(
  id,
  password,
  (id) =>
    storage.getRoles(
      id,
      (userRole) => {
        console.log(`hi ${userRole.name}, your role is ${userRole.role}`);
      },
      (onError) => {
        console.log(error);
      }
    ),
  (error) => {
    console.log(error);
  }
);
