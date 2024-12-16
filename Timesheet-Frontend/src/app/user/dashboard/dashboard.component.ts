import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/project-management/project.service';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  assignedUsers: User[]; // Users assigned to this project
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  assignedProjects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.assignedProjects = data;
    });
  }
}
