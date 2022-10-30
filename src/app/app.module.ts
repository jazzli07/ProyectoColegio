import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcionesComponent } from './components/login/opciones/opciones.component';
import { HomeComponent } from './components/home/home.component';
import { LoginAdminsComponent } from './components/login/login-admins/login-admins.component';
import { LoginDocentesComponent } from './components/login/login-docentes/login-docentes.component';
import { LoginEstudiantesComponent } from './components/login/login-estudiantes/login-estudiantes.component';
import { LoginPadresComponent } from './components/login/login-padres/login-padres.component';

// angular bootstrap modal
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//animaciones y angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

//componentes generados por us
import { MenuAdminsComponent } from './components/administradores/menu-admins/menu-admins.component';
import { AulasComponent } from './components/administradores/aulas/aulas.component';
import { AlumnosComponent } from './components/administradores/alumnos/alumnos.component';
import { DocentesComponent } from './components/administradores/docentes/docentes.component';
import { CursosComponent } from './components/administradores/cursos/cursos.component';
import { AgregarCursoComponent } from './components/administradores/cursos/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/administradores/cursos/editar-curso/editar-curso.component';
import { EditarDocenteComponent } from './components/administradores/docentes/editar-docente/editar-docente.component';
import { AgregarDocenteComponent } from './components/administradores/docentes/agregar-docente/agregar-docente.component';
import { AgregarAlumnoComponent } from './components/administradores/alumnos/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/administradores/alumnos/editar-alumno/editar-alumno.component';
import { AgregarAulaComponent } from './components/administradores/aulas/agregar-aula/agregar-aula.component';
import { EditarAulaComponent } from './components/administradores/aulas/editar-aula/editar-aula.component';
import { CursosAulaComponent } from './components/administradores/aulas/cursos-aula/cursos-aula.component';
import { AgregarHorariosComponent } from './components/administradores/horarios/agregar-horarios/agregar-horarios.component';
import { EditarHorariosComponent } from './components/administradores/horarios/editar-horarios/editar-horarios.component';
import { HorariosComponent } from './components/administradores/horarios/horarios.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpcionesComponent,
    LoginAdminsComponent,
    LoginDocentesComponent,
    LoginEstudiantesComponent,
    LoginPadresComponent,
    MenuAdminsComponent,
    AulasComponent,
    AlumnosComponent,
    DocentesComponent,
    CursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    EditarDocenteComponent, 
    AgregarDocenteComponent, AgregarAlumnoComponent, EditarAlumnoComponent, AgregarAulaComponent, EditarAulaComponent, CursosAulaComponent, AgregarHorariosComponent, EditarHorariosComponent, HorariosComponent
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }