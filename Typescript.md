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

let arr: Array<numbers> = [1,2,3,4] - You define the array type as well as the values within your array which in this case is numbers. 


