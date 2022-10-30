import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHorariosComponent } from './agregar-horarios.component';

describe('AgregarHorariosComponent', () => {
  let component: AgregarHorariosComponent;
  let fixture: ComponentFixture<AgregarHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
