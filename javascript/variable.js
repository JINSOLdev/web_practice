// 배열 만들기
// const blanks = []                            // 비어있는 배열
// const numbers = [2, 10, 7, 3.3]              // 숫자들로 이루어진 배열
// const classmates = ["철수", "영희", "훈이"]     // 문자들로 이루어진 배열

// // 배열의 길이 구하기 _ length
// console.log(classmates.length)          // 3

// // 배열의 값 꺼내기
// console.log(classmates[0])              // "철수"
// console.log(classmates[1])              // "영희"

// // 배열의 맨 뒤에 추가하기 _ push
// classmates.push("민지")     // ["철수", "영희", "훈이", "민지"]
// console.log(classmates)

// // 배열의 맨 마지막 삭제하기 _ pop
// classmates.pop()          // ["철수", "영희", "훈이"]
// console.log(classmates)

// // 배열의 요소 정렬하기, 거꾸로 뒤집기 _ sort
// classmates.sort()               // ["영희", "철수", "훈이"]
// console.log(classmates)

// // 배열이 가지고있는 데이터 확인하기 _ includes
// classmates.includes("철수")     // true
// classmates.includes("영구")     // false

const classmates1 = ["철수", "영희", "훈이"]
const classmates2 = ["민지", "민수"]

// 배열 2개 연결하기 _ concat
console.log(classmates1.concat(classmates2))     // ["철수", "영희", "훈이", "민지", "민수"]

// 배열을 문자로 만들기 _ join
console.log(classmates1.join(', '))     // 철수, 영희, 훈이
console.log(classmates1.join("와 ") )   // 철수와 영희와 훈이

// 배열 분리하기 _ splice
const classmates = ["철수", "영희", "훈이"]
console.log(classmates.splice(0, 1))     // ["철수"]

// 배열에서 원하는 요소만 뽑아내기 _ filter
console.log(classmates.filter((data) => (data === "영희")) )    // ["영희"]
console.log(classmates.filter((data) => (data !== "영희"))  )   // ["철수", "훈이"]

// 배열에서 모든 요소 변경하기 _ map
console.log(classmates.map((data) => (data + "어린이")))         // ["철수어린이", "영희어린이", "훈이어린이"]

