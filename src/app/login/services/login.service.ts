import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor( private _http: Http ) { }

  login(user)
  {
    let headers           = new Headers();

  	let username:string = user.email;
  	let password:string = user.password;
     headers.append('Content-Type', 'application/json');
  	let body = {
  		"username" : username,
  		"password" : password
  	}
  	return this._http.post('http://localhost:1337/auth/login', body, { headers: headers}).map((res:Response) => res.json())
  }

  postUser( user ) {

    let headers   = new Headers();
                
    let firstname = user.firstname;
    let lastname  = user.lastname;
    let mobile    = user.mobile;
    let username  = user.email;
    let password  = user.password;
        
    let urlSearchParams   = new URLSearchParams();
    
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    urlSearchParams.append('firstName', firstname); 
    urlSearchParams.append('lastName', lastname); 
    urlSearchParams.append('mobile', mobile); 
    urlSearchParams.append('username', username); 
    urlSearchParams.append('password', password); 
    
    let body = urlSearchParams.toString()

    return this._http.post('http://localhost:1337/register', body, { headers: headers }).map((res:Response) => res.json())
  }

}

