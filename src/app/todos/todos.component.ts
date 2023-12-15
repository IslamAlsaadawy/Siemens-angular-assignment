import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../services/todos.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
   todos$: Todo[] = [];
  constructor(private todoService: TodosService){}

 

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos$ = todos;
        console.log(this.todos$);
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
      }
    });
  

  }



}
