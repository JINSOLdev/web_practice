// 객체들을 배열에 담아서 선언하기
const classmates = [
    {
        number: '철수',
        grade: 1,
        subject: '수학',
    },
    {
        number: '영희',
        grade: 2,
        subject: '국어',
    },
    {
        number: '훈이',
        grade: 3,
        subject: '영어',
    },
];

// 위 객체들을 깔끔하게 한줄로 적기

const classmates1 = [
    { number: '철수', grade: 1, subject: '수학' },
    { number: '영희', grade: 2, subject: '국어' },
    { number: '훈훈이', grade: 3, subject: '영어' },
];

// 배열 안의 객체에서 뽑아내기
classmates[0].number;
classmates[0].grade;
classmates[0].school;

// 배열 안의 객체에서 원하는 객체(8살 이상)만 뽑아내기
console.log(classmates.filter((data) => data.grade >= 2));

const fruits = [
    { number: 1, title: '레드향' },
    { number: 2, title: '샤인머스켓' },
    { number: 3, title: '산청딸기' },
    { number: 4, title: '한라봉' },
    { number: 5, title: '사과' },
    { number: 6, title: '애플망고' },
    { number: 7, title: '딸기' },
    { number: 8, title: '천혜향' },
    { number: 9, title: '과일선물세트' },
    { number: 10, title: '귤' },
];

const fruitsNumber = [
    fruits[0].number,
    fruits[1].number,
    fruits[2].number,
    fruits[3].number,
    fruits[4].number,
    fruits[5].number,
    fruits[6].number,
    fruits[7].number,
    fruits[8].number,
    fruits[9].number,
];
console.log(fruitsNumber);

const fruitsTitle = [
    fruits[0].title,
    fruits[1].title,
    fruits[2].title,
    fruits[3].title,
    fruits[4].title,
    fruits[5].title,
    fruits[6].title,
    fruits[7].title,
    fruits[8].title,
    fruits[9].title,
];
console.log(fruitsTitle);

const FRUITS = [
    fruitsNumber[0] + ' ' + fruitsTitle[0],
    fruitsNumber[1] + ' ' + fruitsTitle[1],
    fruitsNumber[2] + ' ' + fruitsTitle[2],
    fruitsNumber[3] + ' ' + fruitsTitle[3],
    fruitsNumber[4] + ' ' + fruitsTitle[4],
    fruitsNumber[5] + ' ' + fruitsTitle[5],
    fruitsNumber[6] + ' ' + fruitsTitle[6],
    fruitsNumber[7] + ' ' + fruitsTitle[7],
    fruitsNumber[8] + ' ' + fruitsTitle[8],
    fruitsNumber[9] + ' ' + fruitsTitle[9],
];
console.log(FRUITS);
