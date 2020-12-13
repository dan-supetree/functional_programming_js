const _find = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i].i, list)) return list[i];
  }
};

const _findIndex = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return i;
  }
  return -1;
};

const _identify = (v) => v;
const _beq = (a) => (b) => a === b;
const _not = (v) => !!v;
const _positive = (list) => _find(list, _identify);
const _negativeIndex = (list) => _findIndex(list, _not);

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

//compose를 활용한 경우 오른쪽에서 왼쪽으로 연속적으로 실행되어 최종 결과를 만든다.
//값 대신 함수, if, for 대신 고차 함수와 보조 함수, 연산자 대신 함수.
//함수 합성 등 함수적 기법을 활용해 코드를 간결하게 작성 해 줄 수 있다.
const _some = _compose(_not, _not, _positive);
const _every = _compose(_beq(-1), _negativeIndex);

const greet = (name) => `hi: ${name}`;
const exclaim = (statement) => `${statement.toUpperCase()}`;
const welcome = _compose(greet, exclaim);
console.log(welcome("V"));
