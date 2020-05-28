# What is .netCore 

.net is an open source developer platform to build different types of apps. Has great cross platform compatability (Apps made in .net can be run on windows, linux, mac etc)

MVC Framework. 

## What are razor pages?

Razor pages makes coding pages focused scenarios easier and more productive 
Everything you can do with MVC you can do it using razor pages (Routing models, actionresults, tag helpers etc)

Razor pages has two parts:
    # Razor Page (UX/UI)
    * Page model (Contians handlers)


## Razor Project Directory Description
 
Properties:
    launchsettings.json - launch settings for when you run the application  

wwwroot: (Front end)
    css 
    js
    lib

Pages 
    shared 
        layout.cshtml <-- root html
        partial.cshtml (Partials are supported similar to Ruby On Rails where you can reuse components)
        _ViewImports.cshtml - tag helper file that give you global level access
        _ViewStart - define which page is the root html. default set to layout.cshtml
        indes.cshtml 
            index.cshtml.cs - the c# file that is responsible and behaves as the model 

# Routing in Razor 

Routing in ASP.net Razor pages maps URLS to physical file on disk
Razor pages needs a root folder.

index.cshtml is usually the default file and is mapped to the domain 
www.domain.com <-- loads index.cshtml.
Pages/index.cshtml

www.domain.com/account
Pages/accounts.cshtml
Pages/accounts/index.cshtml  <-- only if account.cshtml is not found

essentially the URL after the slash will look for a pages cshtml file with the name "account" 


# Tag Helpers

Tag helpers enable server side code to participate in creating and rendering html elements in razor pages.
They are embedded in html tags. for ex:
    <a class="ww" asp-area="" asp-page"/Index"> asp-page is a tag helper. 

## Main Method

is what actually builds and runs your application. 

(Program.cs) --> Runs startup.cs --> startup.cs handles configuring adding razor pages, and adding middlewares

ex middleware in startup.cs : 
        app.UseRouting();


![alt-text](https://i.imgur.com/6Doemd4.png)

 Everything within the pipeline is considered middleware. Middleware handlles the req/res


## Middleware in ASP.NET core

What is middleware? middleware essentially is responsible for handling the req/res. Typically a browser will send a request to your server. Pass through middleware intercepting the request. Hands off to the next middleware and so on. Keep in mind at any point in the middleware the response can be prematurely returned if the software deems so. 


## Dependency Injection 

- NET CORE injects objects of dependency classes through constructor or method by using built in IOC container
- Dependency Injection is a design pattern that can help developers decouple the different pieces of their applications
- in ASP.NET Core, both framework services and applications services can be injected into your classes rather than being tightly coupled. 

Similar to package.json where dependencies are globally available within your package. Imagine a wrapper container 
