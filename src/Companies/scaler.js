// function solve() {
//   var i = 0;
//   var sum = 0;
//   while (i < 100) {
//     sum = sum + i;
//     sum = i + sum;
//     i++;
//   }
//   console.log(sum);
// }
// solve();

// function prt(n) {
//   if (n == 0 || n == 1 || n == 2) {
//     return 0;
//   }
//   if (n == 3) {
//     return 1;
//   } else return prt(n - 1) + prt(n - 2) + prt(n - 3);
// }
// function print(n) {
//   var ans = 0;
//   for (var i = 1; i < n; i++) {
//     ans = ans + prt(i) + "";
//   }
//   console.log(ans);
// }
// print(6);

// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(6));

function fun(a, b) {
  if (b == 0) return a;
  return fun(b, a % b);
}
var ans = fun(100, 2000);
console.log(ans);
