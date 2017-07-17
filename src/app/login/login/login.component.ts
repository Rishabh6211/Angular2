import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading : boolean = false;

  constructor() { 

  	this.loading = true;
  }

  ngOnInit() {

		setTimeout(()=>{    
		    this.loading = false;
			console.log('loaderStopped');
		},2000);
  }


}
