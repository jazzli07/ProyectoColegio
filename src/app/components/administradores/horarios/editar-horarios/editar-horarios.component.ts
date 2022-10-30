import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//ventana modal
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//** importar modelo y servicio necesario para la tabla
import { HorariosService } from 'src/app/services/horarios.service';
import { Horarios } from 'src/app/models/horarios.model';

@Component({
  selector: 'app-editar-horarios',
  templateUrl: './editar-horarios.component.html',
  styleUrls: ['./editar-horarios.component.css']
})
export class EditarHorariosComponent implements OnInit { 

  //datos para llenar y actualizar los inputs
  @Input() currentHorario: Horarios = {
    id_horario: 0,
    inicio_fin: 0,
  };

  constructor(private HorariosService: HorariosService,
    private route: ActivatedRoute,
    private router: Router,
    public modal: NgbModal) { }

  ngOnInit(): void {
    //necesario para que currentX se pueda actualizar
    this.getHorario(this.route.snapshot.params['id']);
  }

  getHorario(id: number): void {
    this.HorariosService.get(id).subscribe({
      next: (data) => {
        this.currentHorario = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updateHorario(
    mensajeExito: any,
    mensajeError: any,
    mensajeDatosFaltantes: any
  ): void {
    //ya sea el nombre o la descripcion, si uno de los dos falta mostrar la ventan modal
    if (!this.currentHorario.inicio_fin) {
      //en caso de que falte un dato mostrar una ventana modal al respecto
      this.modal.open(mensajeDatosFaltantes, { centered: true });
    } else {
      this.HorariosService.update(
        this.currentHorario.id_horario,
        this.currentHorario
      ).subscribe({
        next: (res) => {
          console.log(res);
          if (!res.error) {
            this.modal.open(mensajeExito, { centered: true });
          } else {
            this.modal.open(mensajeError, { centered: true });
          }
        },
        error: (e) => console.error(e),
      });
    }
  }

}
