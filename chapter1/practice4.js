/* 
고차 함수, 1.3.4
보통 고차함수는 함수를 인자로 받아 필요한 때에 실행하거나 클로저를 만들어 리턴한다.
*/

//iteratee, predicate에 전달되는 인자 수를 추가해 더 다양한 일을 진행 가능
const _map = (list, iteratee) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(iteratee(list[i], i, list));
  }
  return newList;
};

const _filter = (list, predicate) => {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) newList.push(list[i]);
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

//identify, 받은 인자 v를 리턴
const _identify = (v) => v;

const _positive = (list) => _find(list, _identify);
const _negativeIndex = (list) => _findIndex(list, _not);

//some, every
//const _some = (list) => !!_find(list, _identify); // 배열에 하나라도 긍정값이 있으면 true
const _some = (list) => _not(_not(_positive(list))); // 함수들을 활용해 로직을 개선

const _not = (v) => !v;
const _beq = (a) => (b) => a === b;

//const _every = (list) => _filter(list, _identify).length === list.length; // 배열에 모든 값이 긍정값인 경우 true
const _every = (list) => _beq(-1)(_negativeIndex(list));

console.log(_filter([1, 2, 3, 4], (val, idx) => val % 2 === 0));
console.log(_find([1, 2, 3, 4, 5], (val, idx) => val === 3));
console.log(_findIndex([1, 2, 3], (val, idx) => val === 4));
console.log(_filter([true, 0, 10, "a", null, undefined], _identify));

console.log(_some([true, 1, 0, false]));
console.log(_some([0, null, false]));

// _every는 _filter를 활용했기 때문에 항상 루프를 돌게 된다.
// 함수를 추가적으로 정의하면 로직을 개선할 수 있다.
console.log(_every([1, 2, 3, 4]));
console.log(_every([false, 2, 3, 0]));
console.log(_every([0, null, 2]));
console.log(_every([{}, true, 1]));

// 힘수 합성
