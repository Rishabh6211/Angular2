import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginService } from './services/login.service';
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [LoginService],
  declarations: [LoginComponent, RegistrationComponent,RegistrationComponent]
})
export class LoginModule { }
