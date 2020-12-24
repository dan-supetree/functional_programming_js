// => 을 기준으로 나눠 앞 부분을 new Function의 첫 인자로 대입
// 첫 인자는 함수의 인자 선언부에 사용될 코드가 됨
function L(str) {
  const splitted = str.split("=>");
  return new Function(splitted[0], `return (${splitted[1]});`);
}

console.log(L("n => n*10")(10));
console.log(L("n => n*10")(20));
console.log(L("a,b=>a+b")(10, 20));
