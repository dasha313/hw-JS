/*1*/

for (let i = 1; i <= 50; i++) {
   console.log(i);
}

console.log('');

for (let i = 35; i >= 8; i--) {
   console.log(i)
}


console.log('-------------------------------------------------');


/*2 в HTML*/


/*3*/

let b = 100;
let summ = 0;
for (let i = 0; i <= b; i++) {
   summ = 0;
   for (let j = 0; j <= i; j++) {
      summ += j;
   }
   console.log('summ' + i + '=' + summ);
}


console.log('-------------------------------------------------');


/*4*/

let a = 1;
let sum = 0;
for (let i = 1; i <= a; i++) {
   console.log(i);
   sum += i;
}
console.log(sum);
console.log('');

a = 2;
sum = 0;
for (let i = 1; i <= a; i++) {
   console.log(i);
   sum += i;
}
console.log(sum);
console.log('');

a = 3;
sum = 0;
for (let i = 1; i <= a; i++) {
   console.log(i);
   sum += i;
}
console.log(sum);
console.log('');

a = 4;
sum = 0;
for (let i = 1; i <= a; i++) {
   console.log(i);
   sum += i;
}
console.log(sum);
console.log('');

a = 5;
sum = 0;
for (let i = 1; i <= a; i++) {
   console.log(i);
   sum += i;
}
console.log(sum);
console.log('-------------------------------------------------');

/*5*/

for (let i = 8; i <= 56; i++) {
   if (i % 2 == 1) continue;
   console.log(i);
}
console.log('');


console.log('-------------------------------------------------');


/*6 в HTML*/


/*7*/
for (let n = 1000, num = 5; n > 50; num++) {
   n /= 2;
   console.log(n);
}


console.log('-------------------------------------------------');


/*8*/

let v = 0;
let s = 0;
let namber;
while ((namber = prompt("Введите число", 0)) !== "0" && namber != null) {
   ++v;
   s += +namber;
}
alert("Сумма чисел: " + s + "\nСреднее арифметическое: " + (s / v));


console.log('-------------------------------------------------');


/*9*/
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 368 57';
let nym = '', min, max;
for (let i = 0; i < str.length; i++) {
   nym += str[i];
   if (+str[i] && !+str[i + 1]) {
      if (typeof min !== 'number' || nym < +min) min = +nym;
      if (typeof max !== 'number' || nym > +max) max = +nym;
      nym = '';
   }
}
console.log('Min:', min, 'Max:', max)