/*1*/
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}


console.log('');

/*2*/

/*3*/

let arr3 = [];
for (let i = 23; i <= 57; i++) {
   arr3.push(i);
}
console.log(arr3);


let result = 0;
for (let i = 0; i < arr3.length; i++) {
   result += arr3[i];
}
console.log(result);


console.log('');

/*4*/

let arr4 = ['10', '20', '30', '50', '235', '3000'];
console.log(arr4);
for (let i = 0; i < arr4.length; i++) {
   if (String(arr4[i])[0] == '1' || String(arr4[i])[0] == '2' || String(arr4[i])[0] == '5') {
      console.log(arr4[i]);
   }
}

console.log('');

/*5-возможно ли сделать текст толще через консоль или нужно выводить в документ?*/
let arr5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
console.log(arr5);
for (let i = 0; i < arr5.length; i++) {
   console.log(arr5[i]);
}

console.log('');

/*6*/

let produkt = ['Хлеб', 'Молоко', 'Колбаса', 'Масло',];
console.log(produkt);
produkt[produkt.length] = 'Яйца';
console.log(produkt);

console.log('');

/*7*/
let arr7 = [];

let check = true;
let sum = 0;
while (check) {
   let messager = prompt('Введите число', 0);
   if (messager === '') {
      check = false;
   } else if (messager === null || isNaN(messager)) {
      check = false;
   } else {
      arr7.push(Number(messager));
   }
}
for (let i = 0; i < arr7.length; i++) {
   sum += arr7[i];
}
alert(sum);



console.log('');

/*8*/

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr8);
for (let i = arr8.length - 1; i >= 0; i--) {
   console.log(arr8[i]);
}
arr8.reverse();
console.log(arr8);


console.log('');

/*9*/
let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
console.log(arr9);






