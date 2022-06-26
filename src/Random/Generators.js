/*
    Generators
*/

function *generatorFunc1(i) {
    yield i;
    yield i + 1;
}

const generators = generatorFunc1(5);
// console.log(generators.next()); // { value: 5, done: false }
// console.log(generators.next()); // { value: 6, done: false }
// console.log(generators.next()); // { value: undefined, done: true }

const generatorFunc2 = function*() {
    const x = yield 1;
    console.log(x);
    const y = yield 2;
    console.log(y)
}

const gen1 = generatorFunc2();
// console.log(gen1.next()); // { value: 1, done: false }, x undefined
// console.log(gen1.next()); // { value: 2, done: false }, y undefined
// console.log(gen1.next()); // { value: undefined, done: true }

const genFunc3 = function* (i) {
    console.log("i", i);
    const j = 5 * (yield ( i * 10));
    console.log("j", j);
    const k = yield (2 * j / 4);
    console.log(k);
    return (i+j+k);
}

let gen3 = genFunc3(10);
// console.log(gen3.next(20));
// console.log(gen3.next(10));
// console.log(gen3.next(5));

const genFunc4 = function* () {
    yield;
    foo(yield "I am useless");
}

function foo(x) {
    console.log("Just printing argus passed", x)
}
const gen4 = genFunc4();
// console.log(gen4.next());
// console.log(gen4.next());
// console.log(gen4.next());
// { value: undefined, done: false }
// { value: 'I am useless', done: false }
// Just printing argus passed 5
// { value: undefined, done: true } 

function *fetchUser() {
    const user = yield getUser();
    console.log(user);
}

function getUser() {
    return {name: 'Ashutosh', age: 100}
}
const gen5 = fetchUser();
// console.log(gen5.next())
// console.log(gen5.next())

/*
    yield* expression, which inherently means that we are going to complete another generator function specified in the yield* expression before continuing the current generator function.
*/
function *g1() {
    yield 2;
    yield 3;
    yield 4;
}
function *g2() {
    yield 1;
    yield* g1(); // 
    yield 5;
}

const itr = g2();
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())

function *getFuncChild () {
    yield 1;
    yield 2;
    return 'foo';
    yield 3;
}

function *getFuncMain() {
    const result = yield* getFuncChild();
    console.log(result);
    yield "the end";
}

const itr2 = getFuncMain();
// console.log(itr2.next())
// console.log(itr2.next())
// console.log(itr2.next())

const itr3 = getFuncMain();
/* 
    Similar to our next() method which is called explicitly, for…of loop internally moves on to the next iteration based on the yield keyword. 
*/
for (let i of itr3) {
    console.log(i)
}
