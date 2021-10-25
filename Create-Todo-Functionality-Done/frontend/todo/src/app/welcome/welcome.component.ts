import { WelcomeDataService } from './../service/data/welcome-data.service';
import { TodoDataService } from './../service/data/todo-data.service';
//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public statusNew: boolean,
    public scenarioDate: Date
  ){

  }
}

import { Component, OnInit } from '@angular/core';//'./app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {
  todos: Todo[]

  message: string

    constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('guest').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo('guest', id).subscribe (
      response => {
        console.log(response);
        //this.message = `Delete of Scenario ${id} Successful!`;
        this.message = `Delete of Scenario is Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }
}

export class Class1 {

}

export class Class2 {
  
}