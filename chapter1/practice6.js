const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;

const _compose = function () {
  const args = arguments;
  const start = args.length - 1;
  return function () {
    let i = start;
    let result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);

    return result;
  };
};
const _identify = (v) => v;
const _beq = (a) => (b) => a === b;
const _not = (v) => !!v;
const _positive = (list) => _find(list, _identify);
const _negativeIndex = (list) => _findIndex(list, _not);

const _get = (list, idx) => list[idx];

const _map = (list, iteratee) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(iteratee(list[i], i, list));
  }
  return newList;
};

const _find = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return list[i];
  }
};

const _findIndex = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return i;
  }
  return -1;
};

const _filter = (list, predicate) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) newList.push(list[i]);
  }
  return newList;
};

const _some = _compose(_not, _not, _positive);
const _every = _compose(_beq(-1), _negativeIndex);

///함수를 리턴하는 함수

//val 값을 기억해 익명 함수로 부터 리턴
const constant = (val) => {
  return () => val;
};

const callWith = (val) => {
  return (val2, funct) => funct(val, val2);
};

// 함수의 응용을 중시
const callWith10 = callWith(10);
const callWith5 = callWith(5);
const callWithUsers = callWith([
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 24 },
  { id: 3, name: "C", age: 26 },
  { id: 4, name: "D", age: 22 },
]);
console.log(callWith10(10, mul));
console.log(callWith5(1, add));
console.log(callWith([1, 2, 3])((val) => val * 10, _map));
console.log(callWithUsers(2, _get));
console.log(callWithUsers((user) => user.age > 25, _find));
console.log(callWithUsers((user) => user.age < 25, _filter));
console.log(callWithUsers((user) => user.age > 25, _some));
console.log(callWithUsers((user) => user.age > 25, _every));
