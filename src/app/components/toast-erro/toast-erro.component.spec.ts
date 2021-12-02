import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastErroComponent } from './toast-erro.component';

describe('ToastErroComponent', () => {
  let component: ToastErroComponent;
  let fixture: ComponentFixture<ToastErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
