import { TodoInterface } from '../../interfaces/todo';
import { Component, OnInit, Input } from '@angular/core';
import { combineLatest, filter, map, Observable } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
visibleTodos$ !: Observable<TodoInterface[]>
noTodoClass$ !:Observable<boolean>
isAllTodoSelected$ !:Observable<boolean>

  constructor( private todosService : TodoService){

    this.isAllTodoSelected$ = this.todosService.todos$.pipe(
      map((todos)=> todos.every((todo)=>todo.isCompleted)))

    this.noTodoClass$ = this.todosService.todos$.pipe(
      map((todos)=> todos.length === 0) )

    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$
    ).pipe(map(([todos, filter]: [TodoInterface[], FilterEnum])=>{
      if(filter === FilterEnum.active){
        return todos.filter(todo => !todo.isCompleted)
      }
      else if (filter === FilterEnum.completed){
        return todos.filter((todo)=> todo.isCompleted)
      }
      console.log('combine', todos, filter);
      return todos
    }))
   }

   toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement
    this.todosService.toggleAll(target.checked)
   }

  ngOnInit(): void {
  }

}
