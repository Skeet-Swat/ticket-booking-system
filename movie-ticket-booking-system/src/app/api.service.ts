import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  callApi(){
    return this._http.get("https://fake-movie-database-api.herokuapp.com/api?s=batman")
  }
}
