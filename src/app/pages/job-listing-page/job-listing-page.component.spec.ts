import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingPageComponent } from './job-listing-page.component';

describe('JobListingPageComponent', () => {
  let component: JobListingPageComponent;
  let fixture: ComponentFixture<JobListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobListingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
