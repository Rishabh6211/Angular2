import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CenterComponent } from './center/center.component';
export const routes: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
 
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'center',
    component: PaginationComponent,
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}