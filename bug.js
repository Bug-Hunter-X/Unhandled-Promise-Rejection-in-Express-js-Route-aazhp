const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing! Express doesn't automatically handle this
    console.error('Error:', error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that can fail
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve({message: 'Success!'});
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
}