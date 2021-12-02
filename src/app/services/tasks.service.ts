import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getTasks() {
    const url = 'http://localhost:5000/cards/';
    const token = this.loginService.getToken();

    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    });
  }

  // Adicionar nova task
  addTask(body: any) {
    const url = 'http://localhost:5000/cards/';
    const token = this.loginService.getToken();

    return this.http.post(url, body,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    });
  }

  // Editar Task
  editTask(task: any) {
    const url = `http://localhost:5000/cards/${task.id}`;
    const token = this.loginService.getToken();

    return this.http.put(url, task,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    });
  }

  // Mudar status da Task
  changeStatusTask(task: any) {
    const url = `http://localhost:5000/cards/${task.id}`;
    const token = this.loginService.getToken();

    return this.http.put(url, task,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    });
  }

  // Deletar Task
  deleteTask(idTask: any) {
    const url = `http://localhost:5000/cards/${idTask}`;
    const token = this.loginService.getToken();

    return this.http.delete(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      })
    });
  }

}
