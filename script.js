/*
1--masla

function power(a, n) {
  return Math.pow(a, n);
}

let value = power(2, 3);
console.log(value);
*/

/*
//let a = +prompt("a sonini kiriting:");


2-masla
let arfimetigi = 0;
let geometrigi = 0;
function mena(a, b) {
  arfimetigi = (a + b) / 2;
  geometrigi = (a + b) ^ (1 / 2);
  console.log(`arfimetigi ${arfimetigi} geometrigi ${geometrigi}`);
}
mena(12 , 48)
*/

/*
3-masala

function sign(n) {
    if (n<0) {
        return -1
    }else if(n>0){
    return 1
    }else 0
}
sign (8)
*/
/*

4-masla

function numberofroots(A, B, C) {
  var D = B ^ B - 4 * A * C;
  if (D > 0) {
    return 2;
  } else if (D === 0) {
    return 1;
  } else {
    return 0;
  }
}

*/
/*

5-masala
function AreaOfCircle(R) {
  let S = 3.14 * R * R;
  return S;
}

let R = 5;
let area = AreaOfCircle(R);
console.log(area);
*/

/*
6-masala

function sumRange(A, B) {
  if (A > B) {
    return 0;
  }
  var sum = 0;
  for (var i = A; i <= B; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumRange(8, 10));

*/

/*
7-masal


function calc(A, B, S) {
  if (S == "-") {
    return A - B;
  } else if (S == "*") {
    return A * B;
  } else if (S == "/") {
    return A / B;
  } else if (S == "+") {
    return A + B;
  } else {
    return 0;
  }
}
console.log( calc(4 ,5 ,"+"));

*/
/*
8-masala
function isEven(K) {
    if (K%2==0) {
        return true
    }else{
        return false
    }
}
console.log(isEven(7))
*/

/*

9-masala

function sortABC(a, b, c) {
  var small = Math.min(a, b, c);
  var middle = a + b + c - (small + Math.max(a, b, c));
  var big = Math.max(a, b, c);
  return "kichigi: " + small + ", o'rtachasi: " + middle + ", kattasi: " + big;
}
console.log(sortABC(5, 2, 8));
*/
/*

10-masala

function isPowerN(K, N) {
  if (K < 1 || N < 2) {
    return false;
  }
  let power = 1;
  let result = Math.pow(N, power);
  while (result <= K) {
    if (result === K) {
      return true;
    }
    power++;
    result = Math.pow(N, power);
  }
  return false;
}
*/
/*
11-masala
function isPrime(N) {
  if (N <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      return false;
    }
  }
  return true;
}


12-msala
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2 || num === 3) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function numberOfPrime(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
console.log(numberOfPrime(N));

13-masala
function digitNth(K, N) {
  var count = digitCount(K); 
  if (count < N) {
    return -1; 
  } else {
    var digits = K.toString().split(""); 
    return parseInt(digits[digits.length - N]); 
  }
}
function digitCount(num) {
  return num.toString().length; 
}


14-masla
function inverseNumber(N) {
  let reversed = 0;
  while (N > 0) {
    let digit = N % 10; 
    reversed = reversed * 10 + digit; 
    N = Math.floor(N / 10); 
  }
  return reversed;
}
console.log(inverseNumber(N));

16-masala

function factorial(N) {
  if (N < 0) {
    return 1;
  } else if (N === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= N; i++) {
      result *= i;
    }
    return result;
  }
}

17-masala

function getSum3(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0) {
      sum += i;
    }
  } 
  return sum;
}
const N = 15;
const result = getSum3(N);
console.log("Sum of numbers divisible by 3 from 1 to", N, "is", result)


18-masala

function sumOddEven(N) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      sumEven += i; 
    } else {
      sumOdd += i; 
    }
  }
  return {
    sumEven,
    sumOdd
  };
}
const N = 10;
const result = sumOddEven(N);
console.log("Sum of even numbers:", result.sumEven);
console.log("Sum of odd numbers:", result.sumOdd);

19-masala

function invertTime(H, M, S) {
  let totalSeconds = (H * 3600) + (M * 60) + S;
  return totalSeconds;
}
let hours = 2;
let minutes = 30;
let seconds = 45;
let convertedSeconds = invertTime(hours, minutes, seconds);
console.log(convertedSeconds);

20-masla

function decTime(H, M, S) {
  let totalSeconds = H * 3600 + M * 60 + S;
  totalSeconds--;
  let newH = Math.floor(totalSeconds / 3600);
  let newM = Math.floor((totalSeconds % 3600) / 60);
  let newS = totalSeconds % 60;
  return `${newH}:${newM}:${newS}`;
}
console.log(decTime(10, 30, 45))
*/
