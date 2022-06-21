ES6 data manipulation
=

Array
=

The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

* JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)


* JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.


* JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.


* JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).


               const fruits = ['Apple', 'Banana'];
               const fruitsString = fruits.join(', ');
               console.log(fruitsString);
               // "Apple, Banana"


JavaScript typed arrays
=

JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.

Array objects grow and shrink dynamically and can have any JavaScript value. JavaScript engines perform optimizations so that these arrays are fast. However, as web applications become more and more powerful, adding features such as audio and video manipulation, access to raw data using WebSockets, and so forth, it has become clear that there are times when it would be helpful for JavaScript code to be able to quickly and easily manipulate raw binary data.

Map
=

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.


Objects vs. Maps
=
Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), Object has been used as Map historically.

                const contacts = new Map()
                contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
                contacts.has('Jessie') // true
                contacts.get('Hilary') // undefined
                contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
                contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
                contacts.delete('Raymond') // false
                contacts.delete('Jessie') // true
                console.log(contacts.size) // 


