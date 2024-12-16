import { Component } from '@angular/core';
import { Timelog, TimelogService } from './timelog.service';

@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.css']
})
export class TimelogComponent {

  timelogs: Timelog[] = [];
  newTimelog: Timelog = { date: '', project: '', task: '', hours: 0, status: '' };
  filter: string = 'day';

  constructor(private timelogService: TimelogService) { }

  ngOnInit(): void {
    this.fetchTimelogs();
  }

  // Fetch timelogs based on filter
  fetchTimelogs(): void {
    this.timelogService.getTimelogsByFilter(this.filter).subscribe((data) => {
      this.timelogs = data;
    });
  }

  // Add a new timelog
  addTimelog(): void {
    this.timelogService.createTimelog(this.newTimelog).subscribe((created) => {
      this.timelogs.push(created);
      this.resetForm();
    });
  }

  // Reset form after adding a new timelog
  resetForm(): void {
    this.newTimelog = { date: '', project: '', task: '', hours: 0, status: '' };
  }

}
