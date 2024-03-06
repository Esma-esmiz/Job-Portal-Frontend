import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFilterBoxComponent } from './job-filter-box.component';

describe('JobFilterBoxComponent', () => {
  let component: JobFilterBoxComponent;
  let fixture: ComponentFixture<JobFilterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobFilterBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobFilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
