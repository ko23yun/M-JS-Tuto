let user = {
  name: "John",
  age: 30,
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
  clone[key] = user[key];
  console.log(user[key]);
}

// console.log(clone);
