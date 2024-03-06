import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobListPageComponent } from './jobs/job-list-page/job-list-page.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContentComponent,
  },
  {
    path: 'jobs',
    component: JobListPageComponent,
    loadChildren: () => import('./jobs/jobs.module').then((m) => m.JobsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployerModuleRoutingModule {}
