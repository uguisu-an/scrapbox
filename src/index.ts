/* eslint no-console: 0 */

for (let i = 0; i < 100; i++) {
  if (i % 15 === 0) {
    console.info("FizzBuzz");
  } else if (i % 3 === 0) {
    console.info("Fizz");
  } else if (i % 5 === 0) {
    console.info("Buzz");
  } else {
    console.info(i);
  }
}
