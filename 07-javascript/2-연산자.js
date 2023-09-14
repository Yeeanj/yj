// 산술 연산자
// +, -, *, /, %, ++, --

console.log(1 + 2); // 숫자 : 피연산자, 기호 : 연산자.
console.log(5 - 7);
console.log(5 * 7);
console.log(10 / 2);
console.log(7 % 5); // 나머지 값 연산자
console.log(6 % 3);
console.log(8 % 2);

function isEven(num) {
  return num % 2 === 0;
} // function 함수(매개변수 {실행함수})

console.log(isEven(3));
console.log(isEven(4));

// 할당 연산자
let a = 2;
console.log(a);

// 재할당

a = 3;
console.log(a);

// a = a + 3;
a %= 3;
console.log(a);

// 증가 연산자
let b = 1;

// b = b + 1;
console.log(b++); // (과정) (b++ : 선 출력, 후 연산)
console.log(b); // (결과) (++b : 선 연산, 후 출력)

// 감소 연산자
let c = 1;

// c = c - 1;
console.log(c--);
console.log(c);

// 부정 연산자 (반대로 표현)
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!!0); // !! : 긍정
console.log(![]); // 배열([]), 객체({}), 함수(function(){})의 값은 참(true)
console.log(!{});
console.log(!null);
console.log(!function () {});
