Javascript ES6
=
Statements and declarations
=

JavaScript applications consist of statements with an appropriate syntax. A single statement may span multiple lines. Multiple statements may occur on a single line if each statement is separated by a semicolon. This isn't a keyword, buta group of keywords.

Control flow
=

<h3>Block</h3>

A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.

<h3>break</h3>

Terminates the current loop, switch, or label statement and transfers program control tothe statement following the terminated statement

<h3>continue</h3>

Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

<h3>Empty</h3>

An empty statement is used to provide no statement, although the JavaScript syntax wouldexpect one.

<h3>if...else</h3>

Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.

<h3>switch</h3>

Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

<h3>throw</h3>

Throws a user-defined exception.

<h3>try...catch</h3>

Marks a block of statements to try, and specifies a response, should an exception be thrown.

<h3>async function</h3>

Declares an async function with the specified parameters.


Arrow function expressions
=
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

Rest parameters
=
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

             const myPromise = new Promise(function(myResolve, myReject) {
             // "Producing Code" (May take some time)

             myResolve(); // when successful
             myReject();  // when error
            });

            // "Consuming Code" (Must wait for a fulfilled Promise).
            myPromise.then(
              function(value) { /* code if successful */ },
              function(error) { /* code if some error */ }
            );