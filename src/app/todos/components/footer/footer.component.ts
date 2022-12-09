import { map, Observable } from 'rxjs';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  noTodoClass$ : Observable<Boolean>
  activeCount$ : Observable<number>
  itemsLeftText$ : Observable<string>
  filter$: Observable<FilterEnum>;
  filterEnum = FilterEnum;

  constructor( private todosService : TodoService) {

    this.activeCount$ = this.todosService.todos$.pipe(
      map((todos)=> todos.filter((todo) => !todo.isCompleted).length)
    )

    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) =>`item${activeCount !== 1 ? 's' : ''} left`)
    )

    this.noTodoClass$ = this.todosService.todos$.pipe(
      map((todos)=> todos.length === 0) )

      this.filter$ = this.todosService.filter$
  }



  ngOnInit(): void {
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    // console.log('changeFilter', filterName);
    this.todosService.changeFilter(filterName)


    // this.todosService.changeFilter(filterName);
  }



}
