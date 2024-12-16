import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../project-management/task.service';
import { ProjectService } from '../project-management/project.service';
import { Task } from './task.model';

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.css']
})
export class TaskmanagementComponent {

  taskForm!: FormGroup;
  projects: { _id: string; name: string }[] = [];
  tasks: Task[] = []; // Use the Task interface
  statuses: string[] = ['Pending', 'In Progress', 'Completed'];
  loading = false; // To display a loading indicator while fetching data

  constructor(private fb: FormBuilder, private taskService: TaskService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      plannedHours: [0, [Validators.required, Validators.min(1)]],
      status: ['Pending', Validators.required],
      projectId: ['', Validators.required]
    });

    this.fetchProjects();
    this.fetchTasks();
  }

  // Fetch all projects from API
  fetchProjects(): void {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch projects:', err);
        this.loading = false;
      }
    });
  }

  // Fetch all tasks from API
  fetchTasks(): void {
    this.loading = true;
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch tasks:', err);
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Partial<Task> = this.taskForm.value;
      this.taskService.createTask(newTask).subscribe({
        next: (createdTask: Task) => {
          this.tasks.push(createdTask);
          this.taskForm.reset({ status: 'Pending', plannedHours: 0 });
        },
        error: (err) => {
          console.error('Failed to create task:', err.message);
          alert('Error creating task. Please check the server and try again.');
        }
      });
    }
  }

  // Fetch project name by ID
  getProjectName(projectId: string): string {
    return this.projects.find(project => project._id === projectId)?.name || 'Unknown';
  }
}
