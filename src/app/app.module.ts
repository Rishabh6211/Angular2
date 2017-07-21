import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login/login.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }],
  bootstrap: [AppComponent]
})
export class AppModule { }
