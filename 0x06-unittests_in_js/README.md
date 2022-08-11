 Unittests in JS
 =

<h2>Routing</h2>

You define routing using methods of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see app.METHOD. You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details).

<h2>Mocha</h2>

Mocha is a test runner. This just means that it is a tool that runs and executes our tests. The tests themselves aren’t written in Mocha. Other test runners include Jasmine, Jest.

        const assert = require("assert");

        describe("smoke test", function() {
           it("checks equality", function() {
             assert.equal(true, true);
            });
          });