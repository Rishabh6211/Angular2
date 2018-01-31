import { Injectable } from '@angular/core';
import  {SortGridPipe} from './sorting'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';  
@Injectable()
export class PaginationService {
   private _host = "http://localhost:1337";
  constructor(private http: Http) { }

  getRecords() {

    let headers = new Headers();
  	let url = this._host+'/getAllCenter';
	  return this.http.get(url,{headers:headers}).map((res:Response)=>res.json());

    }

    Verify(centerId){
    	let headers = new Headers();
      let url = this._host+'/verifycenter?centerId='+centerId;
      return this.http.put(url,{headers:headers}).map((res:Response)=>res.json());
    }
   

}

