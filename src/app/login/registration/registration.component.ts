import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [LoginService] 
})
export class RegistrationComponent implements OnInit {
public loading : boolean = false;
public user:any = {
                  firstname:"",
                  lastname:"",
                  email:"",
                  mobile:"",
                  password:"",
                  confirmPassword:""
};
  constructor(private _loginService : LoginService) { this.loading = true;}

  ngOnInit() {
  	setTimeout(()=>{    
		    this.loading = false;
			console.log('loaderStopped');
		},2000);
  }
 
 register():void{
  this.loading = true;
  this._loginService.postUser(this.user).subscribe(res =>{
   this.loading = false;
   console.log(res);
   })
 }

}
