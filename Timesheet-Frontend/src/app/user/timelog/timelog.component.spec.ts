import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogComponent } from './timelog.component';

describe('TimelogComponent', () => {
  let component: TimelogComponent;
  let fixture: ComponentFixture<TimelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelogComponent]
    });
    fixture = TestBed.createComponent(TimelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
