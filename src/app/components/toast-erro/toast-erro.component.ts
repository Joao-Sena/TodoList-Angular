import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-erro',
  templateUrl: './toast-erro.component.html',
  styleUrls: ['./toast-erro.component.scss']
})
export class ToastErroComponent implements OnInit {

  @Input() show: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
