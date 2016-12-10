// Print all numbers from 1 to 100 with three exceptions:
// If the number is divisible by 3, print fizz
// If the number is divisible by 5, print buzz
// If the number is divisible by 3 AND 5, print fizzbuzz
var s = '';
var i;
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    s += 'fizzbuzz' + '\n';
  } else if (i % 3 === 0) {
    s += 'fizz' + '\n';
  } else if (i % 5 === 0) {
    s += 'buzz' + '\n';
  } else {
    s += i + '\n';
  }
}
console.log(s);