import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login/login.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
