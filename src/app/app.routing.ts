import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ActiveRouteGuard]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes),HttpModule ],
  exports: [ RouterModule,HttpModule ]
})
export class AppRoutingModule {}