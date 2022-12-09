import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // To hold value from template
  text : string ='';

  // testing
  constructor(private todoService: TodoService) {
  //  this.todoService.todos$.subscribe((todos)=>{
  //   console.log('todos', todos);

  //  })
   }

  ngOnInit(): void {
  }

  changeText(event:Event):void{
    // Solving Event target error
    const target = event.target as HTMLInputElement
    this.text=target.value

  // Capturing click info using events
  // console.log(target.value);
  }

  // Event capturing Text on Pressing Enter
  addTodo():void{
  console.log(this.text);
  this.todoService.addTodo(this.text)
  this.text =''
  }

}
