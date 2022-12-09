import { FooterComponent } from './../components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { TodoComponent } from '../todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from '../services/todo.service';
import { MainComponent } from '../components/main/main.component';
import { SingleTodoComponent } from '../components/single-todo/single-todo.component';

@NgModule({
  declarations: [
    TodoComponent,
    HeaderComponent,
    MainComponent,
    SingleTodoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }
