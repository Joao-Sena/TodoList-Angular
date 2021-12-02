import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ToastSucessoComponent } from '../components/toast-sucesso/toast-sucesso.component';
import { LoginService } from '../services/login.service';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titulo: string = '';
  descricao: string = '';
  tasksTodo: any = undefined;
  tasksDoing: any = undefined;
  tasksDone: any = undefined;
  taskToEdit: any = undefined;

  showToastSucesso = false;
  showToastErro = false;

  constructor(
    private loginService: LoginService,
    private tasksService: TasksService,
    ) { }

  ngOnInit(): void {
    this.login();
  }

  login() {
    this.loginService.login().pipe(take(1)).subscribe(
      (response: any) => {
        localStorage.setItem('token', response);
        this.getTasks();
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  // GET ALL TASKS
  getTasks() {
    this.tasksService.getTasks().pipe(take(1)).subscribe(
      (response: any) => {
        // Filtro para cada status da TAREFA, já que a API manda tudo junto fiz um filtro para separá-las
          this.tasksTodo = response.filter((task: any) => task.lista === 'ToDo' );
          this.tasksDoing = response.filter((task: any) => task.lista === 'Doing' );
          this.tasksDone = response.filter((task: any) => task.lista === 'Done' );
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  // ADICIONAR TASKS
  addTask() {

    const task = {
      titulo : this.titulo, 
      conteudo: this.descricao, 
      lista: 'ToDo'
    }

    this.tasksService.addTask(task).pipe(take(1)).subscribe(
      (response: any) => {
        this.titulo = '';
        this.descricao = '';
        this.showToastSuccess();
        this.getTasks();
      },
      (erro: any) => {
        console.error(erro);
        this.showToastError();
      }
    );
    
  }

  // EDITAR TITULO OU DESCRIÇÃO TASK
  editTask() {
    this.tasksService.editTask(this.taskToEdit).pipe(take(1)).subscribe(
      (response: any) => {
        this.taskToEdit = null;
        this.showToastSuccess();
        this.getTasks();
      },
      (erro: any) => {
        console.error(erro);
        this.showToastError();
      }
    );
  }

  // EXCLUIR TASK
  deleteTask(idTask: string) {
  
    this.tasksService.deleteTask(idTask).pipe(take(1)).subscribe(
      (response: any) => {
        this.showToastSuccess();
        this.getTasks();
      },
      (erro: any) => {
        console.error(erro);
        this.showToastError();
      }
    );
  }

  openModalEditTask(task: any) {
    this.taskToEdit = task;
  }

  cancelEdit() {
    this.taskToEdit = null;
  }

  changeStatusTask(task: any, status: string) {
    task.lista = status;
    this.tasksService.changeStatusTask(task).pipe(take(1)).subscribe(
      (response: any) => {
        this.showToastSuccess();
        this.getTasks();
      },
      (erro: any) => {
        console.error(erro);
        this.showToastError();
      }
    );
  }

  showToastSuccess() {
    this.showToastSucesso = true;

    setTimeout(() => {
      this.showToastSucesso = false;
    }, 2500);
  }

  showToastError() {
    this.showToastErro = true;

    setTimeout(() => {
      this.showToastErro = false;
    }, 2500);
  }

}
