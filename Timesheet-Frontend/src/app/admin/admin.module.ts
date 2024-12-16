import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { TimelogManagementComponent } from './timelog-management/timelog-management.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { AuthService } from '../shared/auth.service';


@NgModule({
  declarations: [
    DashboardComponent,
    UserManagementComponent,
    ProjectManagementComponent,
    TimelogManagementComponent,
    AdminComponent,
    TaskmanagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent
  ],
  providers: [AuthService],
})
export class AdminModule { }
