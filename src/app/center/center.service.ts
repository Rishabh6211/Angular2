import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';  

@Injectable()
export class CenterService {
  private _host = "http://localhost:1337";	
  constructor(private _http: Http) { }

  getCenter(){
  	let headers = new Headers();
  	let url = this._host+'/getAllCenter';
	return this._http.get(url,{headers:headers}).map((res:Response)=>res.json());
  }

}
