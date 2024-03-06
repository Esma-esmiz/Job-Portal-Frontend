import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobSeekerNavComponent } from './job-seeker-nav/job-seeker-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerModuleRoutingModule } from './job-seeker-module-routing.module';
import { MaterialModule } from '../../shared/Material.Module';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JobSeekerNavComponent,
    AppliedJobsComponent,
  ],
  imports: [
    CommonModule,
    JobSeekerModuleRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    JobSeekerNavComponent,
  ]
})
export class JobSeekerModuleModule { }
