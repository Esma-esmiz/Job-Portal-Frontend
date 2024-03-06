import { JobGustNavComponent } from './core/shell/job-gust-nav/job-gust-nav.component';
import { LandingNavComponent } from './core/shell/landing-nav/landing-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingPageComponent } from './pages/job-listing-page/job-listing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobSeekerProfilePageComponent } from './modules/job-seeker-module/profile/job-seeker-profile-page/job-seeker-profile-page.component';
import { DashboardComponent } from './modules/employer-module/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'find-job', component: JobListingPageComponent },
  { path: 'detail', component: JobDetailComponent },
  {
    path: 'job-seeker',
    component:JobSeekerProfilePageComponent,
    loadChildren: () =>
      import('./modules/job-seeker-module/job-seeker-module.module').then(
        (m) => m.JobSeekerModuleModule
      ),
  },
  {
    path: 'employer',
    component:DashboardComponent,
    loadChildren: () =>
      import('./modules/employer-module/employer-module.module').then(
        (m) => m.EmployerModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
