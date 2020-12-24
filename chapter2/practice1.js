const obj = { "a a a": 1 };
obj["b b,"] = 2;
console.log(obj);

const obj2 = { "margin-top": 10 };
obj2["padding-bottom"] = 20;
console.log(obj2);

const obj3 = { 1: 10 };
obj3[2] = 20;
console.log(obj3);

//{} 안에의 문자열 부분에서는 코드를 실행 할 수 없지만
//[] 안에는 코드를 실행 할 수 있음
const obj4 = {};
obj4[true ? "a" : "b"] = 1;
console.log(obj4);

const obj5 = { [true ? "a" : "b"]: 1 };
console.log(obj5);

//호이스팅 활용
function add(a, b) {
  return valid() ? a + b : new Error();

  function valid() {
    return Number.isInteger(a) && Number.isInteger(b);
  }
}

console.log(add(1, 2));
console.log(add(1, "aa"));
