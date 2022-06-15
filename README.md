ES6 Promises
=
Promise
=
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventualsuccess value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, theasynchronous method returns a promise to supply the value at some point in the future.

Promise is in one of these states:

* <h3>pending</h3> : initial state, neither fulfilled nor rejected.

* <h3>fulfilled</h3> : meaning that the operation was completed successfully.

* <h3>rejected</h3> : meaning that the operation failed.