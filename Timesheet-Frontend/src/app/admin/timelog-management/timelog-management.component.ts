import { Component } from '@angular/core';
import { TimelogService } from 'src/app/user/timelog/timelog.service';

@Component({
  selector: 'app-timelog-management',
  templateUrl: './timelog-management.component.html',
  styleUrls: ['./timelog-management.component.css']
})
export class TimelogManagementComponent {

  timelogs: any[] = []; // Array to store timelogs
  filter: string = 'day'; // Default filter option

  constructor(private timelogService: TimelogService) { }

  ngOnInit(): void {
    this.fetchTimelogs();
  }

  // Fetch timelogs based on filter
  fetchTimelogs(): void {
    this.timelogService.getTimelogsByFilter(this.filter).subscribe(
      (data) => {
        this.timelogs = data;
      },
      (error) => {
        console.error('Error fetching timelogs:', error);
      }
    );
  }

}
