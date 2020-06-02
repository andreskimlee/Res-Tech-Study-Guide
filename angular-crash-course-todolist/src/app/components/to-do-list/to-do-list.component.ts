import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo'
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[];
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'todos one',
        completed: false
      },
      {
        id: 2,
        title: 'todos two',
        completed: false
      }
    ]
  }

}
