import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHorariosComponent } from './editar-horarios.component';

describe('EditarHorariosComponent', () => {
  let component: EditarHorariosComponent;
  let fixture: ComponentFixture<EditarHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
