import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFilterSelectedComponent } from './job-filter-selected.component';

describe('JobFilterSelectedComponent', () => {
  let component: JobFilterSelectedComponent;
  let fixture: ComponentFixture<JobFilterSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobFilterSelectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobFilterSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
