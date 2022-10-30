//lo mismo para todos los servicios
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Insertar datos del modelo correspondiente
import { Docentes } from '../models/docentes.model';
//Insertar endpoint correspondiente
const baseUrl = 'https://colegiocebe-postgress.herokuapp.com/docentes';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Docentes[]> {
    return this.http.get<Docentes[]>(baseUrl);
  }

  getOne(id_docente: number): Observable<Docentes> {
    return this.http.get<Docentes>(`${baseUrl}/${id_docente}`); 
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id_docente: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id_docente}`, data);
  }

  delete(id_docente: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id_docente}`);
  }

}
