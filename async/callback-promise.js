class userStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "coding")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const id = prompt("id please");
const password = prompt("password please");
const storage = new userStorage();
storage
  .loginUser(id, password)
  .then((user) => storage.getRoles)
  .then((user) =>
    console.log(`hi ${userRole.name}, your role is ${userRole.role}`)
  )
  .catch(console.log);
