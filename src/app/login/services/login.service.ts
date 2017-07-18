import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor( private _http: Http ) { }

  login(user)
  {
  	let username:string = user.email;
  	let password:string = user.password;
  	let body = {
  		"username" : username,
  		"password" : password
  	}
  	return this._http.get('http://localhost:4200/assets/data/user.json', body).map((res:Response) => res.json())
  }

}

