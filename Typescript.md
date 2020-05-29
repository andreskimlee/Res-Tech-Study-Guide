# Why Typescript

Compiles down to plain JS
Extremely useful for debugging purposes. No more undefined or type errors that are pesky to find during production. Essentially since it finds bugs before runtime it stops you from writing code with bugs before it happens (R.I.P. debugging was fun though) 

# Useful Commands

tsc filename --watch (Auto watches for changes to your ts file to compile to JS)

# Variable Declarance

let doesnt initialize with a variable and can be changed. However you cannot do declare the same variable twice. Simply change the variable value if needed.
const requires initialization with a value and usually for static values that you dont want the value to change

# Data types

You want to define Data Types after declaration of variable name:
    for ex:
        let isNoobAtTS : boolean = true;
                         string
                         number 

You can use string templates such as below in TS:

    let sentence: string = `my name is ${name}`

Intellisense also picks up on what the variable type is and will recommend methods available ONLY for the declared variable type (Quite useful!)

For arrays:

let arr: Array<numbers> = [1,2,3,4] - You define the array type as well as the values within your array which in this case is numbers. (The other way to write it is arr:   number[] = [1,2,3,4] ) BUT since we are learning C# and the syntax is similar to C# prefer Array<numbers> 

Tuples:

let arr: [number, string] = [25, "hello"

enums

enums are essentially custom data type declarations that are extremely useful. 
    for ex: 

enum Color {red, green, blue}

let c : Color = Color.green 

You can also assign numbers within the enum and it will equate to printing the number instead.  for eaxmple
enum Color {red = 10, green, blue} will default green to 11 and blue to 12 unless stated otherwise.

any:

the any type is exactly what it sounds like it allows any data value for a given variable. useful if you are expecting a dynamic range of types.

unknown:

Unknown is the type safe counterpart of any. 

```
let vAny: any = 10;          // We can assign anthing to any
let vUnknown: unknown =  10; // We can assign anthing to unknown just like any 


let s1: string = vAny;     // Any is assigable to anything 
let s2: string = vUnknown; // Invalid we can't assign vUnknown to any other type (without an explicit assertion)
```

The suggested usage is:

There are often times where we want to describe the least-capable type in TypeScript. This is useful for APIs that want to signal “this can be any value, so you must perform some type of checking before you use it”. This forces users to safely introspect returned values.

In the code above, we see vUknown is assigned a int type. After that you cant reassign it to be a string. 

# Typescript infer

let a;
a = 10
a = true; 

if you dont define variable types typescript automatically infers the data type. In this exampple, a is going to be equivalent to like an any

whereas writing a code like this

let a = 10
a = true <-- this wont work. a is now a number type. 

is closer in equivalency to unknown.

# Union of types:

multiType : number | boolean; 

multiType = 20;
multiType = false; 

You can assign variables to have more than one type. 

# Functions
```
function add(num1: number, num2: number) : number {
    return num1 + num2
};
```
you can define argument data types as well as output data types

```
function fullName(person: { firstName: string, lastName: string}) : string {

}
```

 Interfaces 
interface Person {
    firstName: string,
    lastName?: string  (A question mark makes it so that the property becomes an optional property type)
}

this can replace the code above to instead of defining the datatype for arg to be above, you can replace 

fullName(person: Person)

Interface is similar to like custom data types. 

# Class
```
class Employee extends AnotherClass {
    employeeName: string
    
    constructor (name: string) {
        super(AnotherClass)
        this.employeeName = name; 
    }

    greet() {
        console.log("Good morning ${this.employeeName})
    }
}
```
pretty much the same as ES6 syntax. 
You can add public or private attributes to your class as well. For example, employeeName: string can be 

```
public employeeName: string 
``` 

