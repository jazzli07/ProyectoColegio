import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OpcionesComponent } from './components/login/opciones/opciones.component';
import { LoginAdminsComponent } from './components/login/login-admins/login-admins.component';
import { LoginDocentesComponent } from './components/login/login-docentes/login-docentes.component';
import { LoginEstudiantesComponent } from './components/login/login-estudiantes/login-estudiantes.component';
import { LoginPadresComponent } from './components/login/login-padres/login-padres.component';
import { MenuAdminsComponent } from './components/administradores/menu-admins/menu-admins.component';
import { AulasComponent } from './components/administradores/aulas/aulas.component';
import { DocentesComponent } from './components/administradores/docentes/docentes.component';
import { AlumnosComponent } from './components/administradores/alumnos/alumnos.component';
import { CursosComponent } from './components/administradores/cursos/cursos.component';
import { AgregarCursoComponent } from './components/administradores/cursos/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/administradores/cursos/editar-curso/editar-curso.component';
import { EditarDocenteComponent } from './components/administradores/docentes/editar-docente/editar-docente.component';
import { AgregarDocenteComponent } from './components/administradores/docentes/agregar-docente/agregar-docente.component';
import { EditarAlumnoComponent } from './components/administradores/alumnos/editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from './components/administradores/alumnos/agregar-alumno/agregar-alumno.component';
import { AgregarAulaComponent } from './components/administradores/aulas/agregar-aula/agregar-aula.component';
import { EditarAulaComponent } from './components/administradores/aulas/editar-aula/editar-aula.component';
import { CursosAulaComponent } from './components/administradores/aulas/cursos-aula/cursos-aula.component';
import { AgregarHorariosComponent } from './components/administradores/horarios/agregar-horarios/agregar-horarios.component';
import { EditarHorariosComponent } from './components/administradores/horarios/editar-horarios/editar-horarios.component';
import { HorariosComponent } from './components/administradores/horarios/horarios.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '/home', component: HomeComponent },
  { path: 'opciones', component: OpcionesComponent },
  { path: 'login-admins', component: LoginAdminsComponent },
  { path: 'login-docentes', component: LoginDocentesComponent },
  { path: 'login-estudiantes', component: LoginEstudiantesComponent },
  { path: 'login-padres', component: LoginPadresComponent },
  { path: 'menu-admins', component: MenuAdminsComponent,
    children:[
      //CRUD Cursos
      { path: 'agregar-curso', component: AgregarCursoComponent },
      { path: 'cursos', component: CursosComponent},
      { path: 'editar-curso/:id', component: EditarCursoComponent},
      //CRUD docentes
      { path: 'docentes', component: DocentesComponent },
      { path: 'agregar-docente', component:  AgregarDocenteComponent},
      { path: 'editar-docente/:id', component:  EditarDocenteComponent},
      //CRUD alumnos
      { path: 'alumnos', component:  AlumnosComponent},
      { path: 'agregar-alumno', component: AgregarAlumnoComponent },
      { path: 'editar-alumno/:id', component: EditarAlumnoComponent },
      //CRUD aulas
      { path: 'aulas', component: AulasComponent },
      { path: 'agregar-aula', component: AgregarAulaComponent },
      { path: 'editar-aula/:id', component: EditarAulaComponent },
      { path: 'cursos-aula/:id', component: CursosAulaComponent },

       //CRUD horarios
      { path: 'horarios', component: HorariosComponent },
      { path: 'agregar-horarios', component: AgregarHorariosComponent },
      { path: 'editar-horarios/:id', component: EditarHorariosComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
