# What is Angular?

Angular is a front end framework maintained by Google. 

- MVC design pattern (Model View Controller) 
- Uses Typescript 
- Fantastic CLI 

# Ways Angular is different

Uses "services" to share data/functionality between components 
uses RxJS "Observables" for async operations (Instead of promises) - Interesting concept: 
    You get returned a observable where you subscribe to that observable and it behaves like a datastream. 
    (kind of like websockets) 

steep learning curve~

# Anatomy of a component 
```
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root' 
    templateURL: './app.component.html'
    styleUrl: ['.app.component.css]
})
```

@Component is a typescript decorator. Essentially includes meta data for the component. The selector is where the component will get injected into. The templateURL is similar to dynamic pages where components can be reused and have dynamic values based on the variable. (Kind of like a RoR partials)

styleUrls : self explanatory.

```
export class AppComponent implements OnInit {
    name: string = Brad 
    age: number = 37 

    constructor ("services import here") {
        ngOnInit() {
            #Runs when component is created
        }
    }
    
}

``` 

Oninit is like the react compdidmount equivalent. 

# CLI Commands 

ng new app 
ng serve <- run the development server>
ng build  <- build out static assets>

ng generate component todos
ng generate service todo
ng generate module app-routing

# State management

Redux, ngrx can be used for larger applications but for the most part services cover most of the work here because services are used to share data and functionality across components 

 
