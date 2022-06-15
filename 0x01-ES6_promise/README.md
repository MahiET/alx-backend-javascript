ES6 Promises
=

Promise
=
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventualsuccess value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, theasynchronous method returns a promise to supply the value at some point in the future.

Promise is in one of these states:

* pending : initial state, neither fulfilled nor rejected.

* fulfilled : meaning that the operation was completed successfully.

* rejected : meaning that the operation failed.

JavaScript Promises
=

JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. In browsers, JavaScript shares a thread with a load of other stuff that differs from browser to browser. But typically JavaScript is in the same queue as painting, updating styles, and handling user actions (such as highlighting text and interacting with form controls). Activity in one of these things delays the others.

Promise terminology
=

fulfilled - The action relating to the promise succeeded

rejected - The action relating to the promise failed

pending - Hasn't fulfilled or rejected yet

settled - Has fulfilled or rejected

       const myPromise = new Promise((resolve, reject) => {
                 setTimeout(() => {
                  resolve('foo');
                    }, 300); 
                });


          myPromise
            .then(handleResolvedA, handleRejectedA)
            .then(handleResolvedB, handleRejectedB)
            .then(handleResolvedC, handleRejectedC);