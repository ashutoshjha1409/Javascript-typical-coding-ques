/*
    Sum(1)(2)(3)(4)...()
*/


let sum = function(a) {
    return function(b) {
        if(b) {
            return sum(a+b);
        }
        return a;
    }
}

let sumEs6 = (a) => {
    return (b) => {
        return b ? sumEs6(a+b) : a;
    }
}

let sumEs6Shorthand = a => b => b ? sumEs6Shorthand(a+b) : a;

console.log(sumEs6Shorthand(1)(2)(3)(4)())