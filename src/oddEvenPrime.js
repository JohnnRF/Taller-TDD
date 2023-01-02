/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
If number is odd print 'Odd' instead of the number.
If number is even print 'Even' instead of number.
Print number as a string, if it does not meet above two conditions, means if number is Prime.
 */

const game = (num) =>{
    let result = '';
    if (isPrime(num)) {
        result += num;
    }else{
        if (isPar(num)) {
            result += 'Even'
        }
        if (!isPar(num)) {
            result += 'Odd'
        }
    }

    return result;
}

const isPar = num => num % 2 == 0;

const isPrime = num =>{
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num > 1;
}

export {isPrime, game};