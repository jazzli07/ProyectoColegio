import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aulas } from '../models/aulas.model';

const baseUrl = 'https://colegiocebe-postgress.herokuapp.com/aulas';

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Aulas[]> {
    return this.http.get<Aulas[]>(baseUrl);
  }

  get(id_aula: any): Observable<Aulas> {
    return this.http.get<Aulas>(`${baseUrl}/${id_aula}`); 
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id_aula: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id_aula}`, data);
  }

  delete(id_aula: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id_aula}`);
  }

}
