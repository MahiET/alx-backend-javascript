0x05. NodeJS Basics
=


Node.js is an open-source and cross-platform JavaScript runtime environment. Itis a popular tool for almost any kind of project!

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

How do I start with Node.js after I installed it?
=

Once we have installed Node.js, let's build our first web server. Create a file named app.js containing the following contents:


              const http = require('http');

              const hostname = '127.0.0.1';
              const port = 3000;

            const server = http.createServer((req, res) => {
                   res.statusCode = 200;
                   res.setHeader('Content-Type', 'text/plain');
                   res.end('Hello World');
                   });

           server.listen(port, hostname, () => {
           console.log(`Server running at http://${hostname}:${port}/`);
            });