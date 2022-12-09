import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { TodoInterface } from '../interfaces/todo';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos$ = new BehaviorSubject(<TodoInterface[]>([]))
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)

  addTodo(text: string):void{
  const newTodo : TodoInterface = {
    text,
    isCompleted:false,
    id:Math.random().toString(16)
  }

  const updatedTodos = [
    ...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos)

  }

  toggleAll(isCompleted: boolean): void {
    console.log('isCompleted', isCompleted);

    const updatedTodos = this.todos$.getValue().map((todo)=>{
      return {
        ...todo,
        isCompleted,
      }
    })

    // console.log('updatedTodos', updatedTodos);

  }

  changeFilter(filterName: FilterEnum) : void {
    this.filter$.next(filterName)

  }
}
