import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  projects: any[] = [];
  employees: any[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchProjects();
    this.fetchEmployees();
    this.initHoursChart();
  }

  fetchProjects() {
    this.dashboardService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  fetchEmployees() {
    this.dashboardService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  initHoursChart() {
    const ctx = (document.getElementById('hoursChart') as HTMLCanvasElement)
      .getContext('2d')!;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Project A', 'Project B', 'Project C'],
        datasets: [
          {
            label: 'Planned Hours',
            data: [50, 60, 70],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'Actual Hours',
            data: [40, 65, 75],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      },
    });
  }
}
