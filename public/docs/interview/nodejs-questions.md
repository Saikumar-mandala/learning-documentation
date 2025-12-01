# Node.js Interview Questions (Complete A to Z Guide)

## A - Architecture
**Q: Explain Node.js Architecture.**

A: Node.js is a runtime environment built on three core components:
1. **V8 Engine:** Google's JavaScript engine (written in C++) that compiles JavaScript to machine code for high-performance execution.
2. **Libuv:** A C++ library that handles the **Event Loop** and asynchronous I/O operations (file system, network, DNS).
3. **Single-Threaded Event Loop:** Runs on a single main thread but offloads heavy I/O tasks to Libuv's thread pool (default 4 threads).

**Key Components:**
- Event Loop (heart of Node.js)
- V8 Engine (JavaScript execution)
- Libuv (async I/O)
- C/C++ Bindings (connect JS to system libraries)

## A - Async Programming
**Q: What are the different ways to handle async operations in Node.js?**

A: Node.js supports multiple async patterns:
1. **Callbacks** (traditional, callback hell risk)
2. **Promises** (cleaner, chainable)
3. **Async/Await** (modern, most readable)
4. **Event Emitters** (for event-driven programming)

```javascript
// Callback
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Promise
const readFilePromise = util.promisify(fs.readFile);
readFilePromise('file.txt').then(data => console.log(data));

// Async/Await
async function readFile() {
  const data = await fs.promises.readFile('file.txt', 'utf8');
  console.log(data);
}
```

## B - Blocking vs Non-Blocking
**Q: What is the difference between Blocking and Non-Blocking I/O?**

A:
- **Blocking (Synchronous):** Code execution stops until an operation completes. The main thread is blocked.
- **Non-Blocking (Asynchronous):** Code continues executing while the operation runs in the background. Node.js is designed around non-blocking I/O.

```javascript
// Blocking
const data = fs.readFileSync('file.txt', 'utf8'); // Waits here
console.log(data);

// Non-Blocking
fs.readFile('file.txt', 'utf8', (err, data) => {
  console.log(data); // Executed later
});
console.log('This runs first!');
```

## B - Buffers
**Q: What is a Buffer in Node.js?**

A: A Buffer is a temporary memory storage for raw binary data (images, videos, file uploads). Buffers were created because JavaScript originally didn't handle binary data well.

```javascript
// Create Buffer
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.alloc(10); // 10 bytes of zeros
const buf3 = Buffer.allocUnsafe(10); // Faster but may contain old data

console.log(buf1); // <Buffer 48 65 6c 6c 6f>
console.log(buf1.toString()); // "Hello"
console.log(buf1.length); // 5

// Write to buffer
buf2.write('Node.js');
console.log(buf2.toString()); // "Node.js"
```

## C - Callbacks
**Q: What is a Callback function?**

A: A callback is a function passed as an argument to another function and executed after an asynchronous operation completes.

**Convention:** Error-first callbacks (err is the first parameter).

```javascript
// Error-first callback pattern
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Callback Hell (Pyramid of Doom)
fs.readFile('file1.txt', (err, data1) => {
  fs.readFile('file2.txt', (err, data2) => {
    fs.readFile('file3.txt', (err, data3) => {
      // Hard to maintain!
    });
  });
});
```

## C - Cluster Module
**Q: How do you scale a Node.js application?**

A: Node.js is single-threaded and uses only one CPU core. The **Cluster** module allows creating multiple child processes (workers) that share the same server port, utilizing all CPU cores.

```javascript
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process ${process.pid} is running`);
  
  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork(); // Restart dead workers
  });
} else {
  // Workers share TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Process ${process.pid} handled this request\n`);
  }).listen(8000);
  
  console.log(`Worker ${process.pid} started`);
}
```

## C - CORS
**Q: What is CORS and how do you handle it in Node.js?**

A: CORS (Cross-Origin Resource Sharing) is a security feature that restricts web pages from making requests to a different domain than the one serving the page.

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Or configure specific origins
app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST'],
  credentials: true
}));

// Manual CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
```

## D - Debugging
**Q: How do you debug Node.js applications?**

A: Multiple debugging techniques:

1. **Console logging:** `console.log()`, `console.error()`, `console.table()`
2. **Node.js Inspector:** Built-in debugger
3. **VS Code Debugger:** Integrated debugging
4. **Chrome DevTools:** `node --inspect app.js`

```javascript
// Debug mode
node --inspect app.js
node --inspect-brk app.js // Breaks on first line

// Using debugger statement
function calculateSum(a, b) {
  debugger; // Execution pauses here when debugging
  return a + b;
}

// Environment-based logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}
```

## E - Event Loop
**Q: Explain the Event Loop in Node.js.**

A: The Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It continuously checks if there are tasks to execute.

**Event Loop Phases (in order):**
1. **Timers:** Executes callbacks from `setTimeout()` and `setInterval()`
2. **Pending Callbacks:** Executes I/O callbacks deferred from the previous cycle
3. **Idle, Prepare:** Internal use only
4. **Poll:** Retrieves new I/O events, executes I/O callbacks
5. **Check:** Executes `setImmediate()` callbacks
6. **Close Callbacks:** Executes close event callbacks (`socket.on('close')`)

```javascript
console.log('1 - Start');

setTimeout(() => console.log('2 - setTimeout'), 0);
setImmediate(() => console.log('3 - setImmediate'));

process.nextTick(() => console.log('4 - nextTick'));

Promise.resolve().then(() => console.log('5 - Promise'));

console.log('6 - End');

// Output:
// 1 - Start
// 6 - End
// 4 - nextTick
// 5 - Promise
// 2 - setTimeout
// 3 - setImmediate
```

## E - Event Emitters
**Q: What are Event Emitters?**

A: EventEmitter is a Node.js class used to create and handle custom events. It's the foundation of Node.js's event-driven architecture.

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Register event listener
myEmitter.on('event', (data) => {
  console.log('Event occurred:', data);
});

// Emit event
myEmitter.emit('event', { message: 'Hello!' });

// Once (runs only once)
myEmitter.once('login', (user) => {
  console.log('User logged in:', user);
});

// Remove listener
const callback = () => console.log('test');
myEmitter.on('test', callback);
myEmitter.removeListener('test', callback);
```

## E - Express.js
**Q: What is Express.js?**

A: Express is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.

**Key Features:**
- Routing
- Middleware support
- Template engines
- Error handling
- Static file serving

```javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.static('public')); // Serve static files

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  res.json({ success: true, user });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## E - Environment Variables
**Q: How do you manage environment variables in Node.js?**

A: Environment variables store configuration data outside your code. Use `process.env` and the `dotenv` package.

```javascript
// Install: npm install dotenv

// .env file
// PORT=3000
// DB_HOST=localhost
// API_KEY=secret123

// app.js
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const apiKey = process.env.API_KEY;

console.log(`Server running on port ${port}`);

// Different environments
// NODE_ENV=production node app.js
if (process.env.NODE_ENV === 'production') {
  // Production config
} else {
  // Development config
}
```

## F - File System (fs module)
**Q: How do you work with files in Node.js?**

A: The `fs` module provides file system operations. It has both synchronous and asynchronous methods.

```javascript
const fs = require('fs');
const fsPromises = require('fs').promises;

// Read file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write file
fs.writeFile('output.txt', 'Hello Node!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});

// Append to file
fs.appendFile('log.txt', 'New log entry\n', (err) => {
  if (err) throw err;
});

// Delete file
fs.unlink('temp.txt', (err) => {
  if (err) throw err;
});

// Async/await with promises
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Check if file exists
fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'File does not exist' : 'File exists');
});

// Get file stats
fs.stat('file.txt', (err, stats) => {
  if (err) throw err;
  console.log('File size:', stats.size);
  console.log('Is file:', stats.isFile());
  console.log('Is directory:', stats.isDirectory());
});
```

## G - Global Objects
**Q: What are Global Objects in Node.js?**

A: Objects available in all modules without requiring them.

**Common Global Objects:**
- `__dirname`: Absolute path to current directory
- `__filename`: Absolute path to current file
- `process`: Information about Node.js process
- `console`: Console logging
- `Buffer`: Handle binary data
- `setTimeout`, `setInterval`, `setImmediate`
- `global`: Global namespace object

```javascript
console.log(__dirname);  // /Users/username/project
console.log(__filename); // /Users/username/project/app.js

// Process object
console.log(process.pid);        // Process ID
console.log(process.platform);   // 'darwin', 'win32', 'linux'
console.log(process.version);    // Node.js version
console.log(process.argv);       // Command line arguments
console.log(process.env);        // Environment variables
console.log(process.cwd());      // Current working directory

// Exit process
process.exit(0); // Exit with success code
process.exit(1); // Exit with error code
```

## H - HTTP Module
**Q: How do you create an HTTP server in Node.js?**

A: The `http` module provides functionality to create HTTP servers and make HTTP requests.

```javascript
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  // Request handling
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  
  // Set response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  // Send response
  res.end(JSON.stringify({ message: 'Hello World' }));
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Make HTTP request
http.get('http://api.example.com/data', (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});
```

## J - JSON Web Tokens (JWT)
**Q: How do you implement authentication with JWT in Node.js?**

A: JWT is a standard for securely transmitting information between parties as a JSON object.

```javascript
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';

// Generate token
const payload = { userId: 123, username: 'john' };
const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

// Verify token
try {
  const decoded = jwt.verify(token, SECRET_KEY);
  console.log('User:', decoded.userId);
} catch (err) {
  console.error('Invalid token');
}

// Middleware for Express
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Access granted', user: req.user });
});
```

## L - Libuv
**Q: What is Libuv in Node.js?**

A: Libuv is a C library that provides the Event Loop and handles all async I/O operations in Node.js. It's what makes Node.js non-blocking.

**Key Features:**
- Event Loop implementation
- Thread pool (default 4 threads) for file I/O, DNS, CPU-intensive tasks
- Network I/O
- Child processes
- Cross-platform support (Windows, Linux, macOS)

```javascript
// Configure thread pool size
process.env.UV_THREADPOOL_SIZE = 8; // Default is 4

// Operations that use thread pool:
// - fs (file system operations)
// - dns.lookup()
// - crypto operations
// - zlib compression

// Network I/O doesn't use thread pool (handled by OS)
```

## M - Middleware
**Q: What is Middleware in Express?**

A: Middleware functions have access to `req`, `res`, and `next`. They can execute code, modify request/response, end the cycle, or call the next middleware.

**Types:**
1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware

```javascript
const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // MUST call next() to continue
});

// Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});

// Error-handling middleware (4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Built-in middleware
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded
app.use(express.static('public')); // Serve static files

// Third-party middleware
const morgan = require('morgan');
app.use(morgan('dev')); // Logging

const cors = require('cors');
app.use(cors()); // CORS

// Conditional middleware
app.use('/admin', (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
});
```

## M - Modules (CommonJS vs ES Modules)
**Q: What's the difference between CommonJS and ES Modules?**

A:
- **CommonJS:** Traditional Node.js module system (`require`/`module.exports`)
- **ES Modules:** Modern JavaScript standard (`import`/`export`)

```javascript
// CommonJS (file.js)
const fs = require('fs');
const myFunction = () => {};
module.exports = myFunction;
module.exports = { myFunction, anotherFunction };

// ES Modules (file.mjs or with "type": "module" in package.json)
import fs from 'fs';
import { readFile } from 'fs';
export const myFunction = () => {};
export default myFunction;

// Using ES Modules in Node.js:
// 1. Use .mjs extension, OR
// 2. Add "type": "module" to package.json

// Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Import named exports
import { add, subtract } from './math.mjs';

// Default export
export default function() { }

// Import default
import myFunc from './module.mjs';
```

## N - NPM (Node Package Manager)
**Q: What is NPM and how do you use it?**

A: NPM is the default package manager for Node.js. It manages project dependencies and scripts.

```bash
# Initialize project
npm init
npm init -y  # Skip questions

# Install packages
npm install express          # Save to dependencies
npm install --save-dev jest  # Save to devDependencies
npm install -g nodemon       # Global installation
npm install                  # Install all package.json dependencies

# Uninstall
npm uninstall express

# Update packages
npm update
npm outdated  # Check for updates

# Run scripts
npm start
npm test
npm run dev

# Package versions
npm install express@4.17.1   # Specific version
npm install express@latest   # Latest version
npm install express@^4.17.0  # Compatible version (4.x.x)
npm install express@~4.17.0  # Patch updates only (4.17.x)
```

**package.json:**
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}
```

## O - OS Module
**Q: How do you get system information in Node.js?**

A: The `os` module provides operating system-related utility methods.

```javascript
const os = require('os');

console.log('Platform:', os.platform());      // 'darwin', 'win32', 'linux'
console.log('Architecture:', os.arch());      // 'x64', 'arm'
console.log('CPU info:', os.cpus());          // Array of CPU cores
console.log('Total memory:', os.totalmem());  // Bytes
console.log('Free memory:', os.freemem());    // Bytes
console.log('Uptime:', os.uptime());          // Seconds
console.log('Home directory:', os.homedir());
console.log('Temp directory:', os.tmpdir());
console.log('Hostname:', os.hostname());
console.log('Network interfaces:', os.networkInterfaces());

// User info
console.log('User info:', os.userInfo());

// CPU load average
console.log('Load average:', os.loadavg());
```

## P - Promises
**Q: How do Promises work in Node.js?**

A: Promises represent the eventual completion (or failure) of an asynchronous operation.

```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve('Operation successful!');
    } else {
      reject('Operation failed!');
    }
  }, 1000);
});

// Using Promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Cleanup'));

// Promise.all - Wait for all promises
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results))
  .catch(err => console.error(err));

// Promise.race - First to complete
Promise.race([promise1, promise2])
  .then(result => console.log(result));

// Promise.allSettled - Wait for all, don't fail fast
Promise.allSettled([promise1, promise2])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
      } else {
        console.log('Error:', result.reason);
      }
    });
  });

// Converting callback to promise
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## P - Process
**Q: What is the Process object in Node.js?**

A: The `process` object provides information about and control over the current Node.js process.

```javascript
// Process information
console.log(process.pid);           // Process ID
console.log(process.ppid);          // Parent process ID
console.log(process.platform);      // OS platform
console.log(process.arch);          // CPU architecture
console.log(process.version);       // Node.js version
console.log(process.versions);      // Node + dependencies versions
console.log(process.cwd());         // Current working directory
console.log(process.execPath);      // Path to Node.js executable
console.log(process.argv);          // Command line arguments
console.log(process.env);           // Environment variables
console.log(process.uptime());      // Process uptime in seconds

// Memory usage
console.log(process.memoryUsage());
// { rss, heapTotal, heapUsed, external, arrayBuffers }

// Exit process
process.exit(0);  // Success
process.exit(1);  // Error

// Event listeners
process.on('exit', (code) => {
  console.log(`Process exiting with code: ${code}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});

// Change directory
process.chdir('/new/directory');

// Send signals
process.kill(process.pid, 'SIGTERM');
```

## P - Process.nextTick vs setImmediate
**Q: What's the difference between process.nextTick() and setImmediate()?**

A:
- **process.nextTick():** Executes immediately after current operation, **before** Event Loop continues (highest priority)
- **setImmediate():** Executes in the **Check phase** of Event Loop

```javascript
console.log('1 - Start');

setImmediate(() => console.log('2 - setImmediate'));
process.nextTick(() => console.log('3 - nextTick'));

console.log('4 - End');

// Output:
// 1 - Start
// 4 - End
// 3 - nextTick (executes before Event Loop)
// 2 - setImmediate (executes in Event Loop)

// Use nextTick when you need something to run ASAP
// Use setImmediate when you want to run in next Event Loop iteration
```

## R - RESTful APIs
**Q: How do you create a RESTful API in Node.js?**

A: REST (Representational State Transfer) uses HTTP methods to perform CRUD operations.

```javascript
const express = require('express');
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET - Read all
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET - Read one
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST - Create
app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.status(201).json(user);
});

// PUT - Update (full replacement)
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  
  user.name = req.body.name;
  res.json(user);
});

// PATCH - Update (partial)
app.patch('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  
  if (req.body.name) user.name = req.body.name;
  res.json(user);
});

// DELETE - Delete
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  
  users.splice(index, 1);
  res.status(204).send(); // No content
});

app.listen(3000);
```

## S - Streams
**Q: What are Streams in Node.js?**

A: Streams are objects for reading/writing data in chunks rather than loading everything into memory. Perfect for large files.

**Types:**
1. **Readable:** Read data (e.g., `fs.createReadStream`)
2. **Writable:** Write data (e.g., `fs.createWriteStream`)
3. **Duplex:** Both read and write (e.g., TCP sockets)
4. **Transform:** Modify data while reading/writing (e.g., zlib compression)

```javascript
const fs = require('fs');

// Readable stream
const readStream = fs.createReadStream('large-file.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  console.log('Read chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading');
});

readStream.on('error', (err) => {
  console.error('Error:', err);
});

// Writable stream
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello ');
writeStream.write('World!\n');
writeStream.end(); // Close stream

// Pipe: Connect readable to writable
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream); // Efficiently copy file

// Transform stream (compress file)
const zlib = require('zlib');
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

// HTTP response is a writable stream
const http = require('http');
http.createServer((req, res) => {
  const stream = fs.createReadStream('large-file.txt');
  stream.pipe(res); // Stream file to client
}).listen(3000);
```

## T - Template Engines
**Q: How do you use template engines in Node.js?**

A: Template engines allow rendering dynamic HTML. Popular engines: EJS, Pug, Handlebars.

```javascript
const express = require('express');
const app = express();

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Render template
app.get('/', (req, res) => {
  const data = {
    title: 'My Page',
    users: ['Alice', 'Bob', 'Charlie']
  };
  res.render('index', data);
});

app.listen(3000);
```

**views/index.ejs:**
```html
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= title %></h1>
  <ul>
    <% users.forEach(user => { %>
      <li><%= user %></li>
    <% }); %>
  </ul>
</body>
</html>
```

## U - URL Module
**Q: How do you parse and manipulate URLs in Node.js?**

A: The `url` module provides utilities for URL parsing and formatting.

```javascript
const url = require('url');

const myUrl = new URL('https://example.com:8080/path?name=John&age=30#section');

console.log(myUrl.href);       // Full URL
console.log(myUrl.protocol);   // 'https:'
console.log(myUrl.hostname);   // 'example.com'
console.log(myUrl.port);       // '8080'
console.log(myUrl.pathname);   // '/path'
console.log(myUrl.search);     // '?name=John&age=30'
console.log(myUrl.hash);       // '#section'

// Query parameters
console.log(myUrl.searchParams.get('name')); // 'John'
myUrl.searchParams.append('city', 'NYC');
myUrl.searchParams.delete('age');

// Legacy API
const urlString = 'https://example.com/path?name=John';
const parsedUrl = url.parse(urlString, true);
console.log(parsedUrl.query); // { name: 'John' }
```

## V - Validation
**Q: How do you validate data in Node.js?**

A: Use validation libraries like Joi, express-validator, or Yup.

```javascript
// Using Joi
const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(100),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
});

const data = {
  username: 'john123',
  email: 'john@example.com',
  age: 25,
  password: 'password123'
};

const { error, value } = schema.validate(data);

if (error) {
  console.log('Validation error:', error.details[0].message);
} else {
  console.log('Valid data:', value);
}

// Express middleware
app.post('/api/users', (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  
  // Process valid data
  res.json({ success: true });
});
```

## W - Worker Threads
**Q: What are Worker Threads and when to use them?**

A: Worker Threads allow running JavaScript in parallel threads. Unlike Cluster (which creates processes), Worker Threads share memory and are more lightweight.

**Use cases:** CPU-intensive tasks (image processing, video encoding, complex calculations)

```javascript
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  // Main thread code
  console.log('Main thread started');
  
  const worker = new Worker(__filename, {
    workerData: { num: 42 }
  });
  
  worker.on('message', (result) => {
    console.log('Result from worker:', result);
  });
  
  worker.on('error', (err) => {
    console.error('Worker error:', err);
  });
  
  worker.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
    }
  });
  
} else {
  // Worker thread code
  const { num } = workerData;
  
  // CPU-intensive task
  const result = fibonacci(num);
  
  parentPort.postMessage(result);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

# Part 2: Common Node.js Coding Challenges

## 1. Create a Simple HTTP Server
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

## 2. Read and Write Files
```javascript
const fs = require('fs');

// Synchronous
fs.writeFileSync('test.txt', 'Hello Node!');
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);

// Asynchronous
fs.writeFile('test.txt', 'Hello Node!', (err) => {
  if (err) throw err;
  console.log('File written!');
  
  fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});

// Promises
const fsPromises = require('fs').promises;
async function fileOperations() {
  await fsPromises.writeFile('test.txt', 'Hello Node!');
  const data = await fsPromises.readFile('test.txt', 'utf8');
  console.log(data);
}
```

## 3. Express Server with Routing
```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## 4. Logging Middleware
```javascript
const express = require('express');
const app = express();

// Custom logger middleware
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get('/', (req, res) => res.send('Hello'));
app.get('/about', (req, res) => res.send('About'));

app.listen(3000);
```

## 5. Event Emitter Example
```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Register listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.on('greet', (name) => {
  console.log(`Welcome, ${name}!`);
});

// Emit event
myEmitter.emit('greet', 'Alice');
// Output:
// Hello, Alice!
// Welcome, Alice!

// Once listener (runs only once)
myEmitter.once('login', (user) => {
  console.log(`${user} logged in`);
});

myEmitter.emit('login', 'Bob'); // "Bob logged in"
myEmitter.emit('login', 'Alice'); // No output
```

## 6. Stream Large File
```javascript
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  // Bad: Loads entire file into memory
  // const data = fs.readFileSync('large-file.mp4');
  // res.end(data);
  
  // Good: Streams file in chunks
  const stream = fs.createReadStream('large-file.mp4');
  stream.pipe(res);
});

server.listen(3000);
```

## 7. RESTful API with CRUD
```javascript
const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build API', completed: false }
];

// GET all
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// GET one
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Not found' });
  res.json(todo);
});

// POST
app.post('/api/todos', (req, res) => {
  const todo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT
app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Not found' });
  
  todo.task = req.body.task;
  todo.completed = req.body.completed;
  res.json(todo);
});

// DELETE
app.delete('/api/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  
  todos.splice(index, 1);
  res.status(204).send();
});

app.listen(3000);
```

## 8. Error Handling
```javascript
const express = require('express');
const app = express();

// Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Route with error
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) {
    const error = new Error('User not found');
    error.status = 404;
    throw error;
  }
  res.json(user);
}));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

app.listen(3000);
```

## 9. File Upload
```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configure storage
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only images allowed'));
    }
  }
});

// Single file upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded');
  res.json({ file: req.file });
});

// Multiple files
app.post('/upload-multiple', upload.array('images', 5), (req, res) => {
  res.json({ files: req.files });
});

app.listen(3000);
```

## 10. Authentication with bcrypt
```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const users = [];
const SECRET_KEY = 'your-secret-key';

// Register
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = { id: users.length + 1, username, password: hashedPassword };
    users.push(user);
    
    res.status(201).json({ message: 'User created', userId: user.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ error: 'User not found' });
    
    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid password' });
    
    // Generate JWT
    const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000);
```

---

# Key Takeaways

## Best Practices
1. ✅ Always use async/await or Promises over callbacks
2. ✅ Handle errors properly (try-catch, error middleware)
3. ✅ Use environment variables for sensitive data
4. ✅ Implement proper logging
5. ✅ Use streams for large files
6. ✅ Validate and sanitize user input
7. ✅ Use clustering for production apps
8. ✅ Implement rate limiting and security headers
9. ✅ Use connection pooling for databases
10. ✅ Monitor application performance

## Common Interview Topics
- Event Loop and its phases
- Streams and their types
- Cluster vs Worker Threads
- Middleware in Express
- Error handling strategies
- Security best practices
- Performance optimization
- Async programming patterns
