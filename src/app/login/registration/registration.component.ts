import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
public loading : boolean = false;
  constructor() { this.loading = true;}

  ngOnInit() {
  	setTimeout(()=>{    
		    this.loading = false;
			console.log('loaderStopped');
		},2000);
  }

}
