import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { TimelogManagementComponent } from './timelog-management/timelog-management.component';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UserManagementComponent },
      { path: 'projects', component: ProjectManagementComponent },
      { path: 'timelogs', component: TimelogManagementComponent },
      { path: 'tasks', component: TaskmanagementComponent },
      { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
