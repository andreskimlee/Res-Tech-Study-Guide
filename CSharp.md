## Syntax Dict: 

using - import equivalent. 
Console.WriteLine("hello world");  - console log equivalent. 
Console.ReadLine() - keeps console window open 

string abc = "John" - variable declarance for a string (typed language basic)
int num = 8 - variable dec
char var = single string (Use single quotations)
specific number data types (float, double, decimal): 
    ex: 
        double gpa = 3.3

bool isMale = true; 
int[] luckynumbers = {4, 8, 16, 23, 42} - creates an array of integers with the following numbers.
string[] friends = new string[5]; - Creates a array of strings with a maximum length of 5
    strings[0] = "jim" works in c# 

## example code block overview 
           (what it will return void is none))
    static void(return type) MethodName (string name, int age) 
    {
        
    }

    static void Main(string[] args) 
    {

    }

    This is equivalent to a constructor for a class. 

## String Methods

.Substring(8, 3)  - from index 8 grab from 8 to 11

## misc

Math.Abs()
Math.Pow - exponential
Math.Max
Math.Round() - round up
Convert.ToInt32("45")

## Conditionals 

|| && - same as JS
else if - elif 
! - not

Switch cases exist in C# (Same as Ruby) 
    switch (var) 
    {
        case 0:
            do something;
            break;
        case 1:
            do something;
            break; 
    }

## Iterators

while () 

for (int i = 1; i <= 5; i ++ 
)

## Exception handling 

try
{

}

catch(Exception e)
{   
    Console.WriteLine(e.Message)
}

## Classes

namespace Giraffe 
{
    class book 
    {   
        public string title; 
        public string author

        public Book(string aTitle) 
        {
            Constructor
            title = aTitle
        }
    }
}

publics are essentially class attributes.

static attributes for classes are fixed

you can also have static classes where you cannot create instances of that class but have access to methods within the class
best example is the Math class. You dont create instances of the Math class since it is a static class.

### Inheritance 

inheritance format:
    class italianChef : Chef 
    
    You can also override methods that the class is inheriting from if within your Chef class you define a special key to
    be "virtual" 

    ex: 
        ## in the chef class
        public virtual void MakeSpecialDish() 
        {
            Console.WriteLine("Hello")
        }
        ## in the italian chef class.   
        public override void MakeSpecialDish() 
        {
            Console.WriteLine("Hello")
        }


# Getters and Setters

 Defined inside C# Classes. Exactly the same as ruby

instead of using public you can use private attributes

get { return rating; } 
set { rating = value }