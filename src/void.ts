function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, world!");

export {};

/////////////////

function doSomething(callback: () => void) {
  callback();
}

doSomething(() => {
  console.log("Callback function!");
});

export {};

////////////////////
