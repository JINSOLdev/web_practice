// 최대값, 최소값
console.log(Math.max(4, 29, 1, 12)); 
console.log(Math.min(4,29,1,12))

// 반올림, 올림, 버림
console.log(Math.round(2.712))
console.log(Math.ceil(2.1))
console.log(Math.floor(2.712))

// 랜덤
console.log(Math.random())

// 루트
console.log(Math.sqrt(2))

// 휴대폰 인증번호 예제
const number = Math.random()
const token = Math.floor(number * 100000)
console.log("휴대폰 인증번호: " + token )

// 만약 랜덤으로 5자리 이하의 결과가 나올 경우
const number2 = 0.002345 // 만약 Math.random()의 결과가 0.002345일 경우
const token2 = 2345      // Math.floor(0.002345 * 100000)
const paddedToken = String(token).padStart(6,"0")  // 002345
console.log("휴대폰 인증번호: " + paddedToken )