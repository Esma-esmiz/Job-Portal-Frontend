import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSeekerProfilePageComponent } from './profile/job-seeker-profile-page/job-seeker-profile-page.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { JobSeekerProfileTabComponent } from './profile/job-seeker-profile-tab/job-seeker-profile-tab.component';

const routes: Routes = [
  {
    path: 'profile',
    component: JobSeekerProfileTabComponent,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  { path: 'applied-jobs', component: AppliedJobsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobSeekerModuleRoutingModule {}
