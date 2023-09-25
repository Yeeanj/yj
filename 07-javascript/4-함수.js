// 함수 선언하기

hello();

// 함수 선언문
function hello() {
  console.log("hello");
}

// 함수 표현식
const world = function () {
  console.log("world");
};

world();

// return(반환) & 종료
// 함수는 return을 만나면 종료된다.
// return 뒤에 오는 코드는 실행되지 않는다.

function hello1() {
  return "hello";
}

function hello2() {
  return;
}

function hello3() {
  return 1;
  // return 2; // 실행 X
}

function hello4() {
  console.log("4");
  return 3;
}

console.log(hello1(), hello2(), hello3(), hello4());

// 예시
function getGrade(score) {
  if (score === 100) {
    return "A+"; // A+
  } else if (score >= 90) {
    return "A"; // A
  } else if (score >= 80) {
    return "B"; // B
  } else if (score >= 70) {
    return "C"; // C
  } else if (score >= 60) {
    return "D"; // D
  } else {
    return "F"; // F
  }
}

console.log(getGrade(55));

// 매개변수 패턴
function sum(x, y = 1) {
  return x + y;
}

console.log(sum(1, 5));
console.log(sum(1));

//  객체의 구조 분해 할당
const user = {
  name: "winter",
  age: 2,
  // email: "seaju0527@naver.com",
};

function getName({ name }) {
  return name;
}
function getEmail({ email = "이메일이 없습니다" }) {
  return email;
}

console.log(getName(user));
console.log(getEmail(user));

// 배열의 구조 분해 할당
const animals = ["dog", "cat", "fish"];

// 두번째 요소 변환하는 기능
function getSecond([, b = "두 번째 요소가 없습니다.", c]) {
  return [b, c];
}

console.log(getSecond(animals));

// 화살표 함수
// function 함수이름(매개변수){실행문}
// (매개변수) => {실행문}

function hello() {
  console.log("hello");
}
const hello12 = function () {
  console.log("hello2");
};
const hello13 = () => {
  console.log("hello3");
};

hello();
hello12();
hello13();
