import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {
  projectForm!: FormGroup;
  assignUsersForm!: FormGroup;
  projects: any[] = [];
  filteredProjects: any[] = [];
  users: any[] = [];
  isEdit: boolean = false;
  selectedProject: any;
  isAssignUsersModalOpen: boolean = false;
  searchTerm: string = '';
  selectedFilter: string = '';

  constructor(private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.initializeForms();
    this.fetchProjects();
    this.fetchUsers();
  }

  initializeForms() {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      client: ['', Validators.required],
      address: ['', Validators.required],
      department: ['', Validators.required],
      businessUnit: ['', Validators.required],
      type: ['', Validators.required],
    });

    this.assignUsersForm = this.fb.group({
      users: [[], Validators.required],
    });
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
      this.filterProjects();
    });
  }

  fetchUsers() {
    this.projectService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addOrUpdateProject() {
    const projectData = this.projectForm.value;

    if (this.isEdit) {
      this.projectService.updateProject(this.selectedProject._id, projectData).subscribe(() => {
        this.fetchProjects();
        this.resetForm();
      });
    } else {
      this.projectService.addProject(projectData).subscribe(() => {
        this.fetchProjects();
        this.resetForm();
      });
    }
  }

  deleteProject(projectId: string) {
    this.projectService.deleteProject(projectId).subscribe(() => {
      this.fetchProjects();
    });
  }

  editProject(project: any) {
    this.isEdit = true;
    this.selectedProject = project;
    this.projectForm.patchValue(project);
  }

  resetForm() {
    this.projectForm.reset();
    this.isEdit = false;
    this.selectedProject = null;
  }

  filterProjects() {
    let filtered = this.projects;

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((p) =>
        Object.values(p).some((value) =>
          value ? value.toString().toLowerCase().includes(term) : false
        )
      );
    }

    if (this.selectedFilter) {
      filtered = filtered.filter((p) => p.type === this.selectedFilter);
    }

    this.filteredProjects = filtered;
  }

  openAssignUsersModal(project: any) {
    this.selectedProject = project;
    this.isAssignUsersModalOpen = true;
  }

  closeAssignUsersModal() {
    this.isAssignUsersModalOpen = false;
    this.assignUsersForm.reset();
  }

  assignUsersToProject() {
    const userIds = this.assignUsersForm.value.users;
    this.projectService.assignUsersToProject(this.selectedProject._id, userIds).subscribe(() => {
      this.closeAssignUsersModal();
      this.fetchProjects();
    });
  }
}