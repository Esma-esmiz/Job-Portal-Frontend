import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGustNavComponent } from './job-gust-nav.component';

describe('JobGustNavComponent', () => {
  let component: JobGustNavComponent;
  let fixture: ComponentFixture<JobGustNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobGustNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobGustNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
