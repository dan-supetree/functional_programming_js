# Chapter2

## 객체

- 객체의 key, value는 {},.,[] 등을 통해서 설정 가능
- 특수 문자, 숫자 등을 가리지 않고 어떤 문자열이든 key로 만들어 줄 수 있음
- {} 안에의 문자열 부분에서는 코드를 실행 할 수 없음
- [] 안에는 코드를 실행 할 수 있음

## 함수

함수를 정의하는 기본적인 방법들은 아래와 같음

```
function add1(x,y){
  return x+y;
}

const add2 = function(x,y) {
  return x+y;
}

const m = {
  add3: function(x,y) {
    return x+y;
  }
}
```

**호이스팅**

변수나 함수가 어디서 선언되든지 해당 스코프 최상단에 위치하게 되어 동일 스코프 어디서든 참조할 수 있는 것을 의미한다.

```
//호이스팅 발생 전
add1(1,2);
add2(3,4)

function add1(x,y){
  return x+y;
}

var add2 = function(x,y){
  return x+y;
}

//호이스팅 발생 후
function add1(x,y){ //함수 선언
  return x+y;
}
var add2; //변수 선언

add1(1,2);
add2(3,4);

add2 = function(x,y){ //
  return x+y;
}

```

**괄호 없이 즉시 실행**

괄호를 통해 익명 함수를 즉시 실행할 수 있음

```
(function(a){
  console.log(a);
})(100)

!function(a){
  console.log(a);
}(1);

true&&function(a){
  console.log(a);
}(1);

1 ? function(a){
  console.log(a);
}(1) : 5;

0, function(a) {
  console.log(a);
}(1);

new function() {
  console.log(1);
};

```

**new Function과 eval 활용 관련**

new Function과 eval이 일반 코드보다 느린거는 맞지만 성능 저하의 직접적인 원인이 되지 않도록 사용하면 성능 문제는 최소화 가능

```
const a = eval("10+5");
console.log(a);

const add = new Function('a, b','return a+b');
add(1,2);
```
