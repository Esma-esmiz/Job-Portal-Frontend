import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobListPageComponent } from './job-list-page/job-list-page.component';
import { JobListComponent } from './job-list/job-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateJobComponent } from './create-job/create-job.component';
import { MaterialModule } from '../../../shared/Material.Module';
import { InputModule } from '../../../core/shell/input/input.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditJobComponent } from './edit-job/edit-job.component';
@NgModule({
  declarations: [
    JobListPageComponent,
    CreateJobComponent,
    JobListComponent,
    EditJobComponent

  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    InputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class JobsModule { }
