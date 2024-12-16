import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogManagementComponent } from './timelog-management.component';

describe('TimelogManagementComponent', () => {
  let component: TimelogManagementComponent;
  let fixture: ComponentFixture<TimelogManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelogManagementComponent]
    });
    fixture = TestBed.createComponent(TimelogManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
