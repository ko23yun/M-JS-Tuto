let user = {
  name: "John Smith",
  age: 35,
};

let secondUser = JSON.parse(JSON.stringify(user));

console.log(secondUser);
