let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { //starts iterating 2 to n
  for (let j = 2; j < i; j++) {  /* if the current iteration i divides evenly by the second iteration j, i is not prime, and the second iteration i is checked. The label nextPrime is required for the continue directive to escape the nested loop. */
    if (i % j == 0) continue nextPrime;
  }

console.log(i);

}