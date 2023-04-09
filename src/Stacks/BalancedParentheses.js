class Stack {
    constructor() {
        this.items = []
    }
    push = (element) => {
        this.items.push(element);
    }
    pop = () => {
        return this.items.pop();
    }
    peek = () => {
        return this.items[this.items.length - 1]
    }
    isEmpty = () => {
        return this.items.length === 0;
    }
    clear = () => {
        this.items = [];
    }
    size = () => {
        return this.items.length;
    }
    all = () => {
        console.log("Items: ", this.items);
    }
}

const stack = new Stack();

const checkBalancedParenthese = (str) => {
    const stack = new Stack();

    for (let i = 0; i < str.length; i++){
        if (str[i] === '{' || str[i] === '[' || str[i] === '('){
            stack.push(str[i]);
        }
        if (str[i] === '}' || str[i] === ']' || str[i] === ')'){
            if (stack.isEmpty())
            return false;
            
            const temp = stack.pop();
            
            if (temp === '{' && str[i] !== '}')
                return false;
            else if(temp === '[' && str[i] !== ']')
                return false        
            else if(temp === '(' && str[i] !== ')')
                return false;
        }              
    }
    if (stack.isEmpty())
            return true;
        else   
            return false;  
}
//console.log(checkBalancedParenthese('{[]}')); // true
//console.log(checkBalancedParenthese('[{}{}{}{]')); // false
//console.log(checkBalancedParenthese('({[]}){}[][({})]')); // true

