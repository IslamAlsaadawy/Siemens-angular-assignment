import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todos: Todo[] = [];
  constructor(private http: HttpClient) { 
  }

   getTodos() {
     
      return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    
}
}