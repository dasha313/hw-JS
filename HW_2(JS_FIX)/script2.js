/*1*/

let name = prompt('Ваше имя ?');
alert('Меня зовут ' + name);
let age = prompt('Ваш возраст ?');
alert('Мне ' + age + ' лет');
let city = prompt('Ваш город проживания ?');
alert('Я проживаю  в городе ' + city);
let phone = prompt('Ваш номер телефона ?');
alert('Мой номер телефона ' + phone);
let email = prompt('Ваш адрус электронной почты ?');
alert('Мой адрес электронной почты ' + email);
let company = prompt('В какой компании вы работаете ?');
alert('Я работаю в компании ' + company);* /



/*2*/



/*3*/

let namber = prompt('Cумма первых трех цифр 111111 равняется сумме вторых трех цифр? Какая сумма первых 1+1+1 ?');
if (namber == 3) {
   console.log('Да');
} else {
   console.log('Нет');
}



/*4*/
let peremennai1 = prompt('Что больше 1 или 0? ');
if (peremennai1 == 1) {
   console.log('Верно');
} else {
   console.log('Неверно');
}

let peremennai2 = prompt('Что больше 0 или 0? ');
if (peremennai2 == 0) {
   console.log('Верно');
} else {
   console.log('Неверно');
}

let peremennai3 = prompt('Что больше -3 или 0? ');
if (peremennai3 < 0) {
   console.log('Неверно');
} else {
   console.log('Верно');
}




/*5*/
let a = 10;
let b = 2;
let summ = a + b;
console.log(summ);
let razn = a - b;
console.log(razn);
let proiz = a * b;
console.log(proiz);
let chas = a / b;
console.log(chas);
let sum = 45;
if (sum > 1) {
   console.log(Math.pow(45, 2));
}



/*6* -не поняла */
let aa = 10;
if (2 < aa < 11) {
   console.log('Верно');
} else {
   console.log('Неверно');
}

let bb = 2;
if (6 <= bb < 14) {
   console.log('Верно');
} else {
   console.log('Неверно');
}



/*7*/
let min = prompt('Введите число от 0 до 59');
if (min >= 0 && min <= 14) {
   console.log("Первая");
}
if (min >= 15 && min <= 30) {
   console.log("Вторая");
}
if (min >= 31 && min <= 45) {
   console.log("Третья");
}
if (min >= 46 && min <= 59) {
   console.log("Четвертая");
}



/*8*/
let day = prompt('Введите число от 1 до 31');
if (day >= 0 && day <= 10) {
   console.log('Первая');
}
if (day >= 11 && day <= 20) {
   console.log('Вторая ');
}
if (day >= 21 && day <= 31) {
   console.log('Третья');
}




/*10*/
let days = prompt('В году 366 дней, в какой из дней (из 366) у вас день рождения ?')
if (days >= 0 && days <= 31) {
   console.log('Январь');
}
if (days >= 31 && days <= 60) {
   console.log('Фефраль');
}
if (days >= 60 && days <= 91) {
   console.log('Март');
}
if (days >= 91 && days <= 122) {
   console.log('Апрель');
}
if (days >= 122 && days <= 153) {
   console.log('Май');
}
if (days >= 153 && days <= 183) {
   console.log('Июнь');
}
if (days >= 183 && days <= 214) {
   console.log('Июль');
}
if (days >= 214 && days <= 245) {
   console.log('Август');
}
if (days >= 245 && days <= 275) {
   console.log('Сентябрь');
}
if (days >= 275 && days <= 306) {
   console.log('Октябрь');
}
if (days >= 306 && days <= 336) {
   console.log('Ноябрь');
}
if (days >= 336 && days <= 366) {
   console.log('Декабрь');
}





