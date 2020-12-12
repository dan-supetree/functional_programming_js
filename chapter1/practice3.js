//key,val를 미리 받아, 함수를 리턴
const bmatch1 = (key, val) => {
  return (obj) => obj[key] === val;
};

const _find = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return list[i];
  }
};

//여러개의 key에 해당하는 value들을 비교하는 함수
const object = (key, val) => {
  return { [key]: val };
};

const match = (obj1, obj2) => {
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

const bmatch = (obj2, val) => {
  if (arguments.length === 2) obj2 = object(obj2, val); // (obj,val) 인 경우 실행
  return (obj) => match(obj, obj2);
};

const users = [
  { id: 1, name: "AA", age: 30 },
  { id: 2, name: "BB", age: 24 },
  { id: 3, name: "AX", age: 35 },
  { id: 4, name: "DD", age: 24 },
  { id: 5, name: "AD", age: 27 },
  { id: 6, name: "HI", age: 21 },
];

console.log(
  match(_find(users, bmatch("id", 3)), _find(users, bmatch("name", "AX")))
);
console.log(_find(users, bmatch({ name: "BB", age: 24 })));

// _indexOf, 고차함수 작성,
// 고차함수: 함수를 인자로 빋거나 함수를 리턴하는 함수
const _indexOf = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return i;
  }
  return -1;
};

console.log(_indexOf(users, bmatch({ id: 4 })));
console.log(_indexOf(users, bmatch({ id: 2, name: "V" })));
