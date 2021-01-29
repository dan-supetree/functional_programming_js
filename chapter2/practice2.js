// => 을 기준으로 나눠 앞 부분을 new Function의 첫 인자로 대입
// 첫 인자는 함수의 인자 선언부에 사용될 코드가 됨
function L(str) {
  const splitted = str.split("=>");
  return new Function(splitted[0], `return (${splitted[1]});`);
}

//메모이제이션 기법
function L2(str) {
  if (L[str]) return L2[str];
  const splitted = str.split("=>");
  return (L2[str] = new Function(splitted[0], `return (${splitted[1]});`));
}

console.log(L("n => n*10")(10));
console.log(L("n => n*10")(20));
console.log(L("a,b=>a+b")(10, 20));

console.log(L2("v, i => i*v")(1, 1));
console.log(L2("v, i => i*v")(2, 2));
console.log(L2("v, i => i*v"));

/*유명 함수(named)의 자기참조
//함수의 이름이 바뀌든 메서드 안에 함수를 다시 참조하고 싶은 상황이든
//상관없이 자기 자신을 정확히 참조 할 수 있음
let f1 = function f() {
  console.log(f); //자기 자신을 참조
};
f1();

let f2 = f1;
f1 = null;
f2();
*/

/*
유명함수식에서 함수이름은 함수 내부 스코프에서만 참조 가능하며
외부에서는 참조 할 수 없고 없애지 못해 매우 안전하다고 함
*/
let h1 = 1;
let hello = function h1() {
  console.log(h1);
};

hello();
console.log(h1);
console.log(++h1);
hello();
console.log(hello.name);
