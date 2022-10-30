import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Horarios } from '../models/horarios.model';

const baseUrl = 'https://colegiocebe-postgress.herokuapp.com/horarios';

@Injectable({
  providedIn: 'root'
})
export class HorariosService { 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Horarios[]> {
    return this.http.get<Horarios[]>(baseUrl);
  }

  get(id_horario: any): Observable<Horarios> {
    return this.http.get<Horarios>(`${baseUrl}/${id_horario}`); 
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id_horario: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id_horario}`, data);
  }

  delete(id_horario: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id_horario}`);
  }

}
