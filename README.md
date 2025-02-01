# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous route handlers.  When an asynchronous operation within a route fails, and the error isn't properly caught and handled, the Express.js server might continue running without any indication of the failure, leading to subtle bugs.

## Problem

The `bug.js` file shows an Express.js server with a route that performs an asynchronous operation.  If the asynchronous operation fails (simulated with a 50% chance of failure), the error is logged to the console, but the Express.js server doesn't stop or send an appropriate error response to the client.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle potential errors in asynchronous Express.js routes.  It uses a `try...catch` block within the asynchronous operation or a `.catch()` block to handle promise rejections gracefully.  This ensures that the server responds appropriately, providing feedback to the client and preventing silent failures.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the server with the bug.
5. Run `node bugSolution.js` to start the server with the solution.