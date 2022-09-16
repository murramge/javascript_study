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

const storagelogin = () =>
  new Promise((resolve, reject) => {
    storage.loginUser(id, password, resolve(id), error);
  });

const storageroles = (user) => {
  storage.getRoles(
    user,
    (userRole) => {
      console.log(`hi ${userRole.name}, your role is ${userRole.role}`);
    },
    (error) => console.log(error)
  );
};

storagelogin() //
  .then(storageroles);
