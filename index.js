function receivesAFunction(callback) {  
    callback();
}

function returnsANamedFunction(callback) {  
    return function namedFunction() {
            console.log("Named fuction created");
      }  
}

function returnsAnAnonymousFunction(callback) {  
    return function () {
            console.log("Named fuction created");
      }  
}