/*
    FizzBuzzBazz    
    Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both    three and five print “FizzBuzz”.

*/

// BruteForce
const fizzBuzzBF = () => {
    for (let i = 1; i <= 50; i++) {
        let output = '';
        //if (i % 3 === 0 && i % 5 === 0) output += 'FizzBuzz';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz'; 
        if (i % 7 === 0) output += 'Bazz'; 
        if (output == '') output = i;
        console.log(output);
    }
}

//fizzBuzzBF();

const fizzBuzz = () => {
    const fizzBuzzMap = {3: 'Fizz', 5: 'Buzz', 7: 'Bazz'};

    for (let i = 1; i <= 50; i++) {
        let output = '';
        
        for (let key in fizzBuzzMap) {
            if (i % key  === 0) output += fizzBuzzMap[key];
        }

        if (output == '') output = i;
        console.log(output);
    }
}

fizzBuzz();