import { Component } from '@angular/core';

interface Task {
  done: boolean;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  taskList: Task[] = []

  constructor() {
    this.taskList = [
      {done: false, description: "passear com os cachorros"},
      {done: false, description: "limpar a casa"},
      {done: true, description: "lavar o carro"},
    ]
  }

  changeTask(task: Task) {
    task.done = !task.done
  }
}
