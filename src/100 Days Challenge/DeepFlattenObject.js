/*
    Problem Statement -
    Given an nested object which can have any type of object, deep flatten
    it and return the new object in Javascript.
    Example
    Input:
    {
        A: "12" ,
        B: 23 ,
        C: {
            P: 23 ,
            O: {
                L: 56
            },
            Q: [ 1 , 2 ]
        }
    }
    Output:
    {
    "A" : "12"
    "B" : 23 ,
    "C.O.L" : 56 ,
    "C.P" : 23 ,
    "C.Q.0" : 1 ,
    "C.Q.1" : 2 ,
    }
*/

const flatten = (obj, prefix) => {
    let resultMap = {};
    let keys = Object.keys(obj);

    keys.forEach(key => {
        let newKey = prefix ? prefix + '.' + key : key;
        if (typeof obj[key] === 'object') {
            const newObj = flatten(obj[key], newKey)
            resultMap = { ...resultMap, ...newObj }
        } else
            resultMap = { ...resultMap, [newKey]: obj[key] }
    });
    return resultMap;


}

const req = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2]
    }
}
console.log(flatten(req)); // { A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }