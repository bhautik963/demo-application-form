import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.apiUrl + environment.version;

  constructor(private http: HttpClient) { }

  listUsers(data:any) {
    const options: any = {
      params: data
    };
    return this.http.get(`${this.baseUrl}users/list`, options).pipe(
      map((response: any) => {
        if (data.isCSV) {
          return window.open(response.data);
        }
        return response;
      })
    );
  }

  
}


