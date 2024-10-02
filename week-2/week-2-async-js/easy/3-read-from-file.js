// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function readAndPrintFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8",((err,data)=>{
        if(err)
        {
            reject(err)
        }
        else{
            console.log(data)
            resolve();
          
        }
    }))
   
  });
}

function expensiveOperation(iterations) {
    console.log("Starting expensive operation...");
    let sum = 0;
    for (let i = 0; i < iterations; i++) {
        sum += i; // Simulate work by summing numbers
    }
    console.log("Expensive operation done. Sum:", sum);
}

const fileData = readAndPrintFile('./text-files/a.txt');

fileData
  .then(() => {
    expensiveOperation(10000000);
    console.log("File read successfully")}
)
  .catch((err) => console.error("Error hogaya", err));
