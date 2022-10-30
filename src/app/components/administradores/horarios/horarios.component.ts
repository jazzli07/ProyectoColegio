import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
//relacionado con la tabla db
import { HorariosService } from 'src/app/services/horarios.service';
import { Horarios } from 'src/app/models/horarios.model';  

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  //Array que guarda todos los datos mostrados en tabla
  horarios?: Horarios[];

  //Datos a enviar en caso de editar o ver detalles. -guia=modelo
  @Input() currentHorario: Horarios = {
    inicio_fin: 0,
  };

    //variables para realizar acciones
    id_horario_action: number = 0;

  constructor(
    private HorariosService: HorariosService,
    private route: ActivatedRoute,
    private router: Router,
    public modal:NgbModal
  ) { }

  ngOnInit(): void { 
    this.retrieveHorario();
  }

  retrieveHorario(): void {
    this.HorariosService.getAll()
      .subscribe({
        next: (data) => {
          this.horarios = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  refreshList(): void {
    this.retrieveHorario();
    this.currentHorario = {};
  }

  confirmDelete(askEliminar: any, id_horario: number): void {
    //actualizar el @id del @curso a eliminar
    this.id_horario_action = id_horario;
    //Se pregunta primero al usuario si realmente desea elmininar el registro y basado en su respuesta se realiza la accion
    this.modal.open(askEliminar,{centered:true})
  }

  delete(mensajeError: any): void{
    console.log(`Se eliminara el @horario con @id ${this.id_horario_action}`);
      this.HorariosService.delete(this.id_horario_action)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.modal.dismissAll(); //cerrar ventana de confirmacion
            this.refreshList() //refrezcar lista
            if (res.error){//en caso de haber error indicarselo al usuario
              this.modal.open(mensajeError, { centered: true });
            }
          },
          error: (e) => {
            console.error(e);
            alert('Hubo un erro al eliminar el registro.');
          }
        });
  
  }

}
