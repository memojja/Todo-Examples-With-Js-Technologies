import { Injectable } from '@angular/core';
import {Todo} from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;
  constructor() {

    this.todos=[
      new Todo(0,"learn angular4"),
      new Todo(1,"learn spring boot"),
      new Todo(2,"learn play"),
      
    ]; 
    this.nextId=3;
  }

  public addTodo(text:string) : void{

    let todo = new Todo(this.nextId,text);
    this.todos.push(todo);
    console.log(this.todos);    
    this.nextId++;
  }
  
  public getTodos(): Todo[]{
    return this.todos;
  }


  public removeTodo(id:number): void{
    this.todos =this.todos.filter( todo => todo.id!== id );
  }
}
