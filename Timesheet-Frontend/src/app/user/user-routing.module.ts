import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimelogComponent } from './timelog/timelog.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      { path:'dashboard',component:DashboardComponent},
      { path:'timelogs',component:TimelogComponent},
      { path:'', redirectTo:'user/dashboard', pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
