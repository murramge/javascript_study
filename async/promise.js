const promise = new Promise((resolve, reject) => {
  //조금 무거운 일들을 함, 파일에서 무언가를 읽어오는 과정 등
  //시간이 꽤 걸리는 작업들을 해야함
  //그래서 비동기적으로 시간이 걸리는 일들을 비동기적으로 처리 함

  console.log("doing something");
  setTimeout(() => {
    reject(new Error());
    // resolve("ellie");
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 달걀`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "빵";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
