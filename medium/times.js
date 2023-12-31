/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function getTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const min = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");
  const ms = now.getMilliseconds().toString().padStart(2, "0");
  return `${hour}:${min}:${sec}:${ms}`;
}

function calculateTime(n) {
  console.log(getTime());

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  console.log(getTime());
}

calculateTime(100000000000000000000000000000000000000000000000000);
