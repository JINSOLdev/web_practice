// if문 적용
if (1 + 1 === 2) {
    console.log('정답!');
}

// if ... else문 적용
if (1 + 1 === 3) {
    console.log('정답!');
} else {
    console.log('오답!');
}

// if, else if, else문 적용
const grade3 = 10;
if (grade3 >= 13) {
    console.log('초등학교 1학년은 13살 이상입니다.');
} else if (grade3 < 13 && grade3 >= 8) {
    console.log('grade3은 13살 미만 8살 이상입니다.');
} else {
    console.log('grade3은 8살 미만입니다.');
}

// 비밀번호 예제
const password1 = '입력받은 비밀번호';
const password2 = '입력받은 비밀번호 확인';

if (password1 === password2) {
    alert('회원가입을 축하합니다.');
} else {
    alert('비밀번호가 다릅니다. 다시 한번 확인해 주세요.');
}
