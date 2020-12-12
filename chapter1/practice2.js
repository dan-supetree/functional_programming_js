const users = [
  { id: 1, name: "AA", age: 30 },
  { id: 2, name: "BB", age: 24 },
  { id: 3, name: "AX", age: 35 },
  { id: 4, name: "DD", age: 24 },
  { id: 5, name: "AD", age: 27 },
  { id: 6, name: "HI", age: 21 },
];

const _filter = (list, predicate) => {
  const newList = [];
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) newList.push(list[i]);
  }
  return newList;
};

const _map = (list, iteratee) => {
  const newList = [];

  for (let i = 0, len = list.length; i < len; i++) {
    newList.push(iteratee(list[i]));
  }
  return newList;
};

// 특정 조건을 만족하는 한 항목 추출,
/* 
단점: 아래 함수들 사이에는 중복되는 부분이 존재함, 함수형적이지 않음 
const findById = (list, id) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
};

const findByName = (list, name) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === name) return list[i];
  }
};

const findByAge = (list, age) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].age === age) return list[i];
  }
};
*/

// 중복 제거, 하지만 객첵가 메서드로 값을 얻어야 되는 경우 문제가 발생함
const _findBy = (key, list, val) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === val) return list[i];
  }
};

console.log(_findBy("age", users, 24));
console.log(_findBy("id", users, 3));

// 객체가 메서드로 값을 받아오는 경우
function User(id, name, age) {
  this.getId = function () {
    return id;
  };
  this.getName = function () {
    return name;
  };
  this.getAge = function () {
    return age;
  };
}

const userList = [
  new User(1, "A", 20),
  new User(2, "B", 23),
  new User(3, "C", 27),
  new User(4, "F", 34),
];

// predicate는 보조 함수, 보조 함수가 데이터의 특성을 대응해주기 때문에, 함수는 데이터의 특성에서 완전히 벗어날수 있다.
const _find = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
};

console.log(_find(userList, (user) => user.getAge() === 23).getAge());
console.log(
  _find(
    userList,
    (user) => user.getId() === 1 && user.getName() === "A"
  ).getAge()
);
console.log(_find(userList, (user) => user.getAge() > 30).getName());
