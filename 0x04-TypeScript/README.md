Typescript
=
TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

Types by Inference
=

TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.

       let helloWorld = "Hello World";
        
              let helloWorld: string

Basic Types
=
For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support the same types as you would expect in JavaScript, with an extra enumeration type thrown in to help things along.

<h2>Boolean</h2>

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

                let isDone: boolean = false;


<h2>Number</h2>

As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

                let decimal: number = 6;
                let hex: number = 0xf00d;
                let binary: number = 0b1010;
                let octal: number = 0o744;
		let big: bigint = 100n;

<h2>String</h2>

 we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

                   let color: string = "blue";
                   color = 'red';
<h2>Array</h2>

Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

             let list: number[] = [1, 2, 3];

