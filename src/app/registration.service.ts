import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class registrationService {

  constructor( private _http: HttpClient) { }

public loginUserFromRemote (user :User):Observable<any>{
return this._http.post<any>("localhost:8081/login",user)
}
}

