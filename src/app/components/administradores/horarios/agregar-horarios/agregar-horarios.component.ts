//angular
import { Component, OnInit } from '@angular/core';

//ventana modal
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

//importar modelo y servicio necesario para la tabla
import { Horarios } from 'src/app/models/horarios.model';
import { HorariosService } from 'src/app/services/horarios.service';

@Component({
  selector: 'app-agregar-horarios',
  templateUrl: './agregar-horarios.component.html',
  styleUrls: ['./agregar-horarios.component.css']
})
export class AgregarHorariosComponent implements OnInit {

  horarios: Horarios = {
    inicio_fin: 0,

  };

  constructor(private HorariosServices: HorariosService, public modal:NgbModal) { }

  ngOnInit(): void {
  }

  saveHorarios(mensajeExito:any, mensajeError:any ,mensajeDatosFaltantes:any): void {
    //ya sea el nombre o la descripcion, si uno de los dos falta mostrar la ventan modal
    if((!this.horarios.inicio_fin)){
        this.modal.open(mensajeDatosFaltantes,{centered:true})
    }else{
      const data = {
        nombre: this.horarios.inicio_fin,
      };
  
      this.HorariosServices.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            if(!res.error){
              this.modal.open(mensajeExito,{centered:true})
            }else{
              this.modal.open(mensajeError,{centered:true})
            }
          },
          error: (e) => {
            //ventana modal de error aqui
            console.error(e);
            
          }
        });
      };
    }

    newHorarios(): void {
      this.horarios = {
        inicio_fin: 0,
      };
    }

}

