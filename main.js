//Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
let num = '';
for (let i = 20; i <= 30; i=i+0.5) {
  num += i + ' ';
}
console.log(num);

//Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let exchangeRate = 40;

for (let i = 0; i <= 100; i+=10) {
  let cost = i * exchangeRate;
  console.log (`${i} USD = ${cost} UAH`); 
}

//Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let N = '50';
for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    console.log(i);
  }
}

//Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).
let n = '6';
let prime = true;

for (let i = 2; i <= n; i++) {
  if (n % i === 0) {
    prime = false;
    break;
  }
}
if (prime) {
  console.log (`${n} - is prime`);
} else {
  console.log (`${n} - not is prime`);
}

//Дано кілька. Визначити, чи можна одержати це число шляхом зведення числа 3 деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
let number = 81;
let result = 1;

while (result < number) {
  result *= 3;
}
if (result === number) {
  console.log (`the number ${number} - can be obtained by reducing the number 3 to a certain power`);
} else {
  console.log (`the number ${number} - can not`);
}