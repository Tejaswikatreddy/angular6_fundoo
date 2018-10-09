import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
 URL = "http://34.213.106.173/api";
  constructor(private http: HttpClient) { }
  getData(name){
    return this.http.get(this.URL+"/"+name);
  }
  postData(name,body){
    return this.http.post(this.URL+"/"+name,body);
  }
}
