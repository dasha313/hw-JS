// 1 

let arr = [];

for (let i = 1; i <= 5; i++) {
   arr.push(i);
}

console.log(arr);


// 3 


let arr3 = [],
   result = 0;

for (let i = 23; i <= 57; i++) {
   arr3.push(i);
   for (let i = 0; i < arr3.length; i++) {
      result += arr3[i];
   }
}

console.log(arr3);
console.log('Сумма = ' + result + '');

// 4 

let strArr = ['10', '20', '30', '50', '235', '3000'];


// 6 

let arr6 = [3, 5, 4, 7, 8, 1];

arr6.push(4567);

console.log('Последний элемент - ' + arr6[arr6.length - 1] + ' ');


// 8 

let arr8 = [12, false, 'Текст', 4, 2, -5, 0],
   i = 6;

while (i < arr8.length) {
   i++;
   arr8.reverse();
}

console.log(arr8);

//9 

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
counter = 0,
   i = 0;

for (let i = 0; i < arr9.length; i++) {
   if (arr9[i] === undefined) {
      counter++;
   }
}

console.log(counter);

//10 

let arr10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
   firstNull = arr10.indexOf(0),
   secondNull = arr10.lastIndexOf(0),
   sum = 0;

for (let i = 0; i < arr9.length; i++) {
   if (firstNull[i] == '0' || secondNull[i] == '0') {
      sum = +firstNull[i] + +secondNull[i];
   }
}

console.log(' Сумма нулей в массиве = ' + sum + '');