//존 레식의 partial 함수, 재사용 불가능함...
/*
Function.prototype.partial1 = function () {
  let fn = this,
    args = Array.prototype.slice.call(arguments); //fn에 this를 담고, args는 partial이 실행될때 넘어온 인자들을 배열로 가지고 있음
  return function () {
    let arg = 0;
    for (let i = 0; i < args.length && arg < args.length; i++) {
      // 리턴된 익명 함수로 부터 들어온 인자들이 arguments로 들어옴
      if (args[i] === undefined) args[i] = arguments[arg++]; // arg[i]가 undefined 인 경우 arguments[arg]의 값으로 치환 가능
    }
    return fn.apply(this, args);
  };
};
*/
//개정 버전, 재활용 가능하나, 상태를 변경하기 때문에 위험
Function.prototype.partial2 = function () {
  let fn = this,
    args = arguments;
  return function () {
    let arg = 0;
    args = Array.prototype.slice.call(args);
    for (let i = 0; i < args.length && arg < args.length; i++) {
      if (args[i] === undefined) args[i] = arguments[arg++];
    }
    return fn.apply(this, args);
  };
};

function abc(a, b, c) {
  console.log(a, b, c);
}

function add() {
  return Array.prototype.reduce.call(arguments, (x, y) => x + y, 0);
}

//초기에 실행할 때 반드시 나중에 실행될 함수에서 사용할 인자의 개수 만큼 꼭 미리 채워놓아야한다.
const ac = abc.partial(undefined, "b", undefined);
const ac2 = abc.partial(undefined, "b");
const add10 = add.partial(undefined, undefined, undefined, 10);
ac("a", "c"); //a,b,c
ac2("a", "c"); //a,b,undefined
console.log(add10(50, 50, 50));
