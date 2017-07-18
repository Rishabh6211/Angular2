import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]   
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public loading : boolean = false;
  public user = {};

  constructor( private _loginService : LoginService) { 

  	this.loading = true;
  }

  ngOnInit() {

		setTimeout(()=>{    
		    this.loading = false;
			console.log('loaderStopped');
		},2000);
  }
   
   /*onsubmit(){
     this.submitted = true;
   }*/
 login():void
 {
   this.loading = true;
   this._loginService.login(this.user).subscribe(res =>{
   this.loading = false;
   console.log(res);
   })
 }

}
