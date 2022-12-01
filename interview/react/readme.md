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
### Diffrence between setTimeout() and setInterval()

```
setTimeout() method calls a function after a number of miliseconds.

where setInterval() repeate the process

const myTimeout = setTimeout(myTimer, 1000);
const myInterval = setInterval(myTimer, 1000);

function myTimer(){
    const date = new Date();
    console.log(date.toLocaleTimeString());
}

```
### What is Async and Await
```
Async makes a function retun a promise
Await makes a function wait for a promise

async function getData(){
    await fetch('http://api.github.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
}

getData()

```

### What are the ES6 features ?
```
-> In ES6 let and const are introduced
-> Arrow function, = () => has been introduced
-> Rest operator
    e.g.
    function myStery(...params){
        retun params;
    }
    let x = myStery(1,2,3); //x become [1,2,3]
-> Destructure:
    e.g. const [name, email] = user;

```

### What is shallow copy and deep copy ?
```
In shallow copy, the newly created object has the same memory address as the old one

where deep copy allocate separate memory location for the new object.

e.g.

shallow copy:
-------------

    var employee = {
        id: "1",
        name: "John"
        address: "New York",
        salary: 50000
    }
    cosole.log("Employee =>", employee);
    var newEmployee = employee; // <- Shallow copy
    cosole.log("New Employee =>", newEmployee);

    console.log("---------After Modification-----------")
    newEmployee.name = 'Doe'
    cosole.log("Employee =>", employee);
    cosole.log("New Employee =>", newEmployee);
    //name of the employee as wel as newEmployee is changed

deep copy:
-------------

    var emp = {
        id: "1",
        name: "John"
        address: "New York",
        salary: 50000
    }
    var newEmp = JSON.parse(json.Stringify(emp)); // <- deep copy
    console.log("emp =>", emp);
    console.log("new emp =>", newEmp);
    console.log("---------After Modification-----------")
    newEmployee.name = 'Doe'
    newEmployee.salary = 70000;
    cosole.log("emp =>", emp);
    cosole.log("new emp =>", newEmp);
    //name and salary of the emp and  newEmp is diffrent

```

### What is closer?
```
self-invoking functions are called closer.
const add = (function(){
    let counter = 0;
    return function(){counter+=1; return counter}
})();
add();
add();
add();

```

### What does reduce and map method do?
```
reduce() reduce the array to one single value
where map() metod generates a new array.

var arr = [1,2,3];

var sum  = arr.reduce(function(sum, elm){
    return sum+elm;
})
console.log(sum);

var mapped = ar.map(function(elm){
    return elm * 10;
})
console.log(mapped); //print new array

```
### What is curring in js?
```
curring is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.

function calculate(length){
    return function (breadth){
        return function (height){
            return length*breadth*height;
        }
    }
}

calculate(4)(5)(6);


```
### What is stateless component and stateful component?
```
Stateful components are those cimpoents which hae a state. The state gets initialized in the constructor.
It stores information about the component's state change in memory.
It may get changed depending upon the action of the component or child components.

Stateless components are those components which don't have any state at all, which means you can not use this.setState inside these components. It is like a normal function with no render method. It has no lifecycle, so it is not possible to use lifecyle methods such as componentDidMount and other hooks.

```
### What is the diffrent between compiler and transpiler?
```
A compiler is a software that converts high-level language to low-level assembly language.

A transpiler is another software, sometimes call source-to-source compiler, which converts a high-level language to another high-level language.

```
