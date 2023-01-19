import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SaltService {
  constructor(private http: HttpClient) {}

  get(params: any) {
    return this.http.get<any[]>(environment.baseUrl + '/posts', {
      params,
    });
  }

  getById(id: number) {
    return this.http.get<any[]>(environment.baseUrl + '/post/' + id);
  }

  create(payload: any) {
    return this.http.post<any>(environment.baseUrl + '/post', payload);
  }

  update(payload: any) {
    return this.http.put<any>(
      environment.baseUrl + `/post/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(environment.baseUrl + `/counter/${id}`);
  }
}
