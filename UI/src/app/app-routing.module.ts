import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReviewComponent} from './review/review.component';
import {AuthenServiceService} from './authen-service.service';

const routes: Routes = 
[{ path: '', redirectTo: '/Login', pathMatch: 'full', data: { title: 'Login |' } },
{ path: 'Login', component: LoginComponent, data: { title: 'Login |' } },
{ path: 'Dashboard', component: DashboardComponent,canActivate:[AuthenServiceService], data: { title: 'Dashboard |' } },
{ path: 'Review', component: ReviewComponent,canActivate:[AuthenServiceService],data: { title: 'Review |' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
