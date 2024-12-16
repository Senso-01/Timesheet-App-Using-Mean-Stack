import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmanagementComponent } from './taskmanagement.component';

describe('TaskmanagementComponent', () => {
  let component: TaskmanagementComponent;
  let fixture: ComponentFixture<TaskmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskmanagementComponent]
    });
    fixture = TestBed.createComponent(TaskmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
