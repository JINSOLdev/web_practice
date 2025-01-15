// 함수 선언식 - 더하기 함수 만들어보기
function add(a, b) {
    return a + b;
}

// 함수 표현식 - 빼기 함수 만들어보기
const minus = function (a, b) {
    return a - b;
};

// 화살표 함수 - 곱하기 함수 만들어보기
const multiply = (a, b) => {
    return a * b;
};

function sayHi() {
    console.log('안녕하세요 여러분!');
}

sayHi();

function calculator(a, b) {
    return a + b;
}

console.log(calculator(3, 5));

// 로그인 검증기능 만들기
function validation(email, password) {
    if (!email.includes('@')) {
        console.log('이메일 형식이 올바르지 않습니다.');
        return false;
    } else if (8 <= password.length && password.length <= 16) {
        console.log('8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.');
        return false;
    } else {
        return true;
    }
}

// 로그인 검증 기능 사용하기
const email = 'email&naver.com';
const password = '1234';
validation(email, password);
