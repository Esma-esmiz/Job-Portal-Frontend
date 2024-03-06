import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../../shared/Material.Module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobListComponent } from './job-list/job-list.component';
import { EditJobComponent } from './edit-job/edit-job.component';
const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'post-job', component: CreateJobComponent },
  { path: 'edit-job', component: EditJobComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
