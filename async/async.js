async function fetchUser() {
  //네트워크 통신을 받는데 10초정도 걸리는 네트워크가 있다고 한다.
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "사과";
}

async function getBanana() {
  await delay(1000);
  return "바나나";
}

function Banana() {
  return delay(1000).then(() => "바나나");
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple},${banana}`);
  });
}

async function pickupFruits() {
  try {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple},${banana}}`;
  } catch (error) {
    console.log(error);
  }
}

pickFruits().then(console.log);

function pickAllFriuts() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFriuts().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
