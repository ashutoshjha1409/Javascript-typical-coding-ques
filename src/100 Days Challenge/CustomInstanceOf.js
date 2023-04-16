/*
    According to MDN –
    The instanceof operator tests to see if the prototype property of a
    constructor appears anywhere in the prototype chain of an object. The
    return value is a boolean value.

    we can derive that to create a custom instanceof
    method we will have to check if the prototype property of a constructor
    appears anywhere in the prototype chain of an object .

    Hints:
    // get the prototype
    const proto = Object .getPrototypeOf(obj);
*/
const customInstanceOf = (source, target) => {
    if (source === null || typeof source !== 'object') return false;

    const proto = Object.getPrototypeOf(source);
    return proto === target.prototype ? true : customInstanceOf(proto, target)
}

class P { }
class Q extends P { }
const q = new Q()
console.log(customInstanceOf(q, Q)) // true
console.log(customInstanceOf(q, P)) // true
console.log(customInstanceOf(q, Object)) // true
function R() { }
console.log(customInstanceOf(q, R)) // false
R.prototype = Q.prototype
console.log(customInstanceOf(q, R)) // true
R.prototype = {}
console.log(customInstanceOf(q, R)) // false