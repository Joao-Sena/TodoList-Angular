import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-sucesso',
  templateUrl: './toast-sucesso.component.html',
  styleUrls: ['./toast-sucesso.component.scss']
})
export class ToastSucessoComponent implements OnInit {

  @Input() show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
