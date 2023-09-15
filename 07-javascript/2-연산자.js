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

// 비교 연산자
// ==, ===, !=, !==, >, >=, <, <=

console.log(1 == "1"); // true (동등연산자)
console.log(1 === "1"); // false (일치연산자)
console.log(1 != "1"); // false (부동)
console.log(1 !== "1"); // true (불일치)
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 2); // false
console.log(1 <= 2); // true

// 논리 연산자
// &&, ||

const f = true;
const g = true;

if (f && g) {
  console.log("둘 다 참입니다."); // 둘다 참일 경우만 출력
}

console.log(true && false); // false
console.log(1 && 0); // 0
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && 2); // 0
console.log("a" && "b" && ""); // (공백표시)
console.log("a" && "b" && "c"); // c (3개 다 참일 경우, 마지막 데이터 반환)

// 또(||)는 연산자
const h = false;
const i = true;

if (h || i) {
  console.log("둘 둥 하나라도 참입니다.");
}

//연산자를 기준으로 가장 먼저 만나는 참(true) 데이터 출력
console.log(false || true); //ture
console.log(0 || 1); //1
console.log(false || {} || 0); // {}(객체)
console.log(false || [] || null); // [](배열)
console.log(function () {} || "" || undefined); // function () {}
console.log(false || 0 || NaN); // NaN (모두 거짓이라면 마지막 데이터 반환)

// 병합 연산자
// a ?? b
const j = 0;

console.log(j || 5); // 5
console.log(j ?? 5); // 0
console.log(null ?? 1); // 1
console.log(undefined ?? 1); // 1
console.log(undefined ?? null); // null (둘 다 무시일 경우 마지막 데이터 반환)
console.log(null ?? 1 ?? 2); // 1
console.log(0 ?? 1 ?? 2); // 0

// 삼항 연산자
// 조건 ? 참 : 거짓
console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2

// if문
let p = 1;

// if (p < 3) {
//   console.log("p는 3보다 작습니다.");
// } else {
//   console.log("p는 3보다 큽니다");
// }

console.log(p < 3 ? "참" : "거짓"); // 참

// 예시
function isAnimal(text) {
  return text === "고양이" ? "고양이" : "고양이 아님";
}
console.log(isAnimal("고양이")); // 고양이
console.log(isAnimal("개")); // 고양이 아님

// 전개 연산자
// 배열의 전개
const q = [1, 2, 3];
const r = [4, 5, 6];

console.log(q.concat(r)); // [1,2,3,4,5,6]
console.log([...q, ...r]); // [1,2,3,4,5,6]

// 객체의 전개
const userC = { name: "부모", age: 50 };
const userD = { nick: "자식", /* parent: userC */ ...userC };

console.log(userD);

// 함수의 전개
function sum(a, b, c) {
  console.log(a + b + c);
}

sum(1, 2, 3); // 6

const num = [1, 2, 3];
sum(num[0], num[1], num[2]); // 6

// 전개연산자 사용
sum(...num); // 6
