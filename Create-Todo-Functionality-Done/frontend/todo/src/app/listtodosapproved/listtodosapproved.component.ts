
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-listtodosapproved',
  templateUrl: './listtodosapproved.component.html',
  styleUrls: ['./listtodosapproved.component.css']
})
export class ListtodosapprovedComponent implements OnInit {

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

 
  addTodo() {
    this.router.navigate(['welcome']);
  }

}
