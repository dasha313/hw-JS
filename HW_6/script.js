/*1*/
console.log('aaa@bbb@ccc'.replace(/@/g, '!'));

console.log('');


/*2*/
let date = '2025-12-31';
console.log(date.replace(/-/g, '/'))

console.log('');


/*3*/
let str = 'Я учу javascript!';
console.log(str.substring(2, 5));
console.log(str.substring(6, 16));
console.log(str.substr(2, 3));
console.log(str.substr(6, 10));
console.log(str.slice(2, 5));
console.log(str.slice(6, 16));

console.log('');


/*4*/
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
   sum += Math.pow(arr[i], 3)
}
console.log(Math.sqrt(sum));

console.log('');


/*5*/
let a = 3;
let b = 5;
let c = Math.abs(a - b);
console.log(c);

a = 6;
b = 1;
c = Math.abs(a - b);
console.log(c);

console.log('');


/*6*/
let dateNow = new Date();
function getZero(num) {
   if (num > 0 && num < 10) {
      return '0' + num;
   } else {
      return num;
   }
}

console.log(dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds(), getZero(dateNow.getDate()) + '.' + getZero(dateNow.getMonth()) + '.' + dateNow.getFullYear());

console.log('');


/*7*/
let str2 = 'aa aba abba abbba abca abea';
console.log(str2);

console.log(str2.slice(3, 6))
console.log(str2.slice(7, 11));
console.log(str2.slice(12, 17));


console.log('');


/*8*/
let namber = '+375333256887';
let nam = /[+][0-9]{1,3}[0-9]{2}[0-9]{7}/g;
console.log(nam.test(namber));

console.log('');


/*9*/
let email = 'missis.dashulka@inbox.ru';
let mail = /^[\w-\.]+@[\w-]+\.[a-z]{2,11}$/g;
console.log(mail.test(email));

console.log('');


/*10*/