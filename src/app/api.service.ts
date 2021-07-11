import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private query_uri = '/api/query'

	constructor(private http: HttpClient) { }

	httpOptions = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
	query(data: any){
		return this.http.post(this.query_uri, data, { headers: this.httpOptions, responseType: 'json'});
	}
}

