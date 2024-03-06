import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingHeaderComponent } from './job-listing-header.component';

describe('JobListingHeaderComponent', () => {
  let component: JobListingHeaderComponent;
  let fixture: ComponentFixture<JobListingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobListingHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
