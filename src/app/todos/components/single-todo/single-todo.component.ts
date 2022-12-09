import { Component, Input, OnInit } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {

  @Input('todo') todoProps! : TodoInterface


  constructor() { }

  ngOnInit(): void {
  }

}
