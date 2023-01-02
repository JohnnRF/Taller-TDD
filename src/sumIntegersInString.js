/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/


const extractNumbersinString = (cadena) =>{
    let regex = /(\d+)/g;
    let numArray = [];

    let numbers = cadena.match(regex);
    if(numbers != null){
        numbers.forEach(function(element){
            let num = parseInt(element);
            numArray.push(num);
        })
        
        return numArray;
    }else{
        return numArray;
    }
}

const sumOfIntegersInString = (cadena) => {
    let numArray = extractNumbersinString(cadena);
    if(numArray.length != 0){
        let sum = 0;
        numArray.forEach(function(num){
            sum += num;
        })
        return sum;
    }else{
        return 0;
    }
};

export {sumOfIntegersInString};

