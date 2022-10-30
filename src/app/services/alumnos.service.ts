//lo mismo para todos los servicios
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Insertar datos del modelo correspondiente
import { Alumnos } from '../models/alumnos.model';
//Insertar endpoint correspondiente
const baseUrl = 'https://colegiocebe-postgress.herokuapp.com/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(baseUrl);
  }

  getOne(id_alumno: number): Observable<Alumnos> {
    return this.http.get<Alumnos>(`${baseUrl}/${id_alumno}`); 
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id_alumno: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id_alumno}`, data);
  }

  delete(id_alumno: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id_alumno}`);
  }

}
