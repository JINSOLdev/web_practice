// 조회한 메일에 **** 표시하기

let email = 'codecamp@gmail.com';
console.log(email.includes('@'));
console.log(email.split('@'));

let userMail = email.split('@')[0];
let company = email.split('@')[1];
console.log(userMail, company);

let maskingMail = []
maskingMail.push(userMail[0])
maskingMail.push(userMail[1])
maskingMail.push(userMail[2])
maskingMail.push(userMail[3])

for (let i = 4; i < userMail.length; i++) {
  maskingMail.push('*');
}

console.log(maskingMail)

let emailMasking = maskingMail.join("")+"@"+company
console.log(emailMasking)