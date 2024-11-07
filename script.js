/* CALCULATOR KATA */

/* This is best done with a switch control, though can also be a chain of conditionals. */
main();
/* FUNCTION main() 
 * Ask the user what operation they want (+, -, *, /)
 * Ask the user for the first number (a)
 * Parse a as an integer
 * Ask the user for the second number (b)
 * Parse b as an integer
 * Based on the operation, send the numbers to the right function as
 * arguments and store the returned value in variable called result
 * Alert the equation a + operation + b = result
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */
function main(){
    let op = prompt("+, -, *, /");
    let a = prompt("First Number");
    let b = prompt("Second Number");
    alert(add(a,b));
}
/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b){
    return a + b;
}

/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */

/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */

/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */

