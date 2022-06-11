let myData = {
    firstName: 'Ashutosh',
    lastName: 'Jha'
}

const getDetails = function (town, country) {
    console.log(`${this.firstName} ${this.lastName}, ${town} - ${country}`);
}

// let getMyName = getDetails.bind(myData);
// console.log(getMyName()); // [Function: bound getDetails]

let getMyName = getDetails.bind(myData, 'Bangalore');
getMyName('India');
/*
    STEP 1: Declare prototype
    Function.prototype.myBind = function () {
    
    }

    Step 2: What does it return? A function
    Function.prototype.myBind = function () {    
        return function () {
        }
    }
    Step 3: What action? call a method referencing an object
    Function.prototype.myBind = function (...args) {
        let context = this;        
        return function () {
            context.call(args[0])
        }
    }

    Step 4: Accept parameters during bind
    Function.prototype.myBind = function (...args) {
        let context = this;      
        let params = args.shift();  
        return function () {
            context.call(args[0], params)
        }
    }

    Step 5: Accept paramaters in copied methods. Change call to apply
    Function.prototype.myBind = function (...args) {
        let context = this;      
        let params = args.slice(1);  
        return function (...args2) {
            context.apply(args[0], [...params, ...args2])
        }
    }

*/
Function.prototype.myBind = function (...args) {
    let context = this;      
    let params = args.slice(1);
    return function (...args2) {
        context.apply(args[0], [...params, ...args2])
    }
}

let getMyName2 = getDetails.myBind(myData, 'Bangalore');
getMyName2('India');