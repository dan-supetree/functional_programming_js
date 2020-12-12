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

const _logLength = (list) => {
  console.log(list.length);
  return list;
};

// key를 기억하는 함수, 받아둔 key로 value 값을 리턴
const _bValue = (key) => {
  return (obj) => {
    return obj[key];
  };
};

const users = [
  { name: "lee", age: 20 },
  { name: "park", age: 21 },
  { name: "lee", age: 25 },
  { name: "kim", age: 22 },
  { name: "nam", age: 35 },
];

/*
const user_under_30 = _filter(users, (user) => user.age < 30); // 30세 미만 유저 추출
const ages = _map(user_under_30, (user) => user.age); // 나이 추출

console.log(user_under_30);
console.log(ages);
_logLength(ages);
*/

const names = _map(
  _filter(users, (user) => user.age < 30),
  (user) => user.name
);

const ages = _map(
  _filter(users, (user) => user.age < 30),
  (user) => user.age
);

console.log(names, ages);
console.log(
  _logLength(
    _map(
      _filter(users, (user) => user.age < 30),
      _bValue("age")
    )
  )
);
