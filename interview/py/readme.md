 <details>
    <summary>What are the benifit of using python?</summary>

    1. Easy to use– Python is a high-level programming language that is easy to use, read, write and learn.

    2. Interpreted language– Since python is interpreted language, it executes the code line by line and stops if an error occurs in any line.

    3. Dynamically typed– the developer does not assign data types to variables at the time of coding. It automatically gets assigned during execution.
    
    4. Free and open-source– Python is free to use and distribute. It is open source.
    
    5. Extensive support for libraries– Python has vast libraries that contain almost any function needed. It also further provides the facility to import other packages using Python Package Manager(pip).
    
    6. Portable– Python programs can run on any platform without requiring any change.
    The data structures used in python are user friendly.
    It provides more functionality with less coding.

</details>


### What is the difference between .py and .pyc files?
```
The .py files are the python source code files. While the .pyc files contain the bytecode of the python files. .pyc files are created when the code is imported from some other source. The interpreter converts the source .py files to .pyc files which helps by saving time.
```

###  Is python case sensitive?
Yes. Python is a case sensitive language.

### What is the difference between Python Arrays and lists?
Arrays and lists, in Python, have the same way of storing data. But, arrays can hold only a single data type elements whereas lists can hold any data type elements.
```
a=arr.array('d', [1.1 , 2.1 ,3.1] )
print(a)
```

### What is a lambda function?
An anonymous function is known as a lambda function. This function can have any number of parameters but, can have just one statement.
```
a = lambda x,y : x+y
print(a(5, 6))
```
### What is pickling and unpickling?
Pickle module accepts any Python object and converts it into a string representation and dumps it into a file by using dump function, this process is called pickling. While the process of retrieving original Python objects from the stored string representation is called unpickling.

### What can you do with Pyton?
 1. Web Development => {Django and Flask webframwork}

 2. Machine Larning => {e.g developing a program that recognize what is in the picture | Face Recognition | Voice Recognition}

	- Popolar ML algorithms => {Neural network, Deep learning, Support vector machines, Random forest}

	- Popular machine learning libraries => {Scikit-learn, TensorFlow}

	- Course at coursera => {Stanford's or Caltech's ML course or kaggle.com}

 3. Data Analysis/Visualizatio =>{Graphical representation of sales volume by male and female on a perticular day of a product of a company}

	- Popular Data Visualization libraries => {Matplotlib, Seaborn}

 4. Scripting => {It referse to writing a small program that is design to automate simple task e.g counting the numbers of email containg certain keywords}

 5. Game Development
	- Popular game development libraries => {Pygame}

 6. Desktop Application
	- Popular desktop application libraries => {Tkinter, QT}: Javascript is more recomended to build this kind of application.

 7. Embedded Application => {Python work well with Raspberry Pi: popular application for hardware hobbyists}


 ### What are python collection data types?

 There are four collection data types in the Python programming language:
```
what is list?

list is a sequence data types which used to store the collection of data
    - allow duplicates
    - mutable

what is tuple?
tuple is a collection of ordered and immutable object
    - allow duplicates
    - immutable
    - there is trick to change the item by converting to list

what is set?
set is an unordered collection of object which does not allow duplicates
    - no duplicates
    - immutable but can add{using add() or update()} or remove{e.g. myset.remove()} items

what is dictionalry?
python dictionaly is ordered collection of items used to store data in key-value pair.

    - no duplicates
    - mutable
```

### As tuple is unchangeable so how to change tuple value then?

Once a tuple is created, you cannot change its values. Tuples are unchangeable, or immutable as it also is called.

But there is a workaround. You can convert the tuple into a list, change the list, and convert the list back into a tuple.

```
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)


Note: ("apple") - this is not a tuple but ("apple",) - is a tuple
```

