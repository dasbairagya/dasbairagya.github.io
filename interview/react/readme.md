# React js interview questions

### what is event loop in js?

***
The event loop is the secret by which JavaScript gives us an illution of being multithreaded even though it is single-threaded.

***

### What is the diffrece between let, var and const ?

***
    var functional scope where let and const is block scope

    var can be updated and re-delared but let can be updated but can not be re-declared where const can't be updated and re-declared.

    var and let can be declared with out initialization but const not
***

### What is hosting in js?

***
Declaration of variabe at the top of their scope

var x; //declare x

x = 5; // Asign 5 to x
***

### What is Promises and Callback

***
    Promises are used to handle asynchronus operations in Javascript
    e.g
    let promise = new Promise(function(resolve, reject)){
        if(1==1){
            resolve("success!");
        }
        else{
            reject("Failure!");
        }
    } 
    promise.then((message)=>{
        console.log(message);
    }).catch((err)=>{
        console.log(err);
    })


    A callback is a function passed as an argument to another function.

    e.g
    function1(){
        console.log('function1');
    }
    function2(){
        console.log('function2');
    }
    function3(callback){
        function2();
        callback();
    }
    function3(function1);
***

