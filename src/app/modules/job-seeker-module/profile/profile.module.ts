import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialComponent } from './social/social.component';
import { JobSeekerProfileTabComponent } from './job-seeker-profile-tab/job-seeker-profile-tab.component';
import { MaterialModule } from '../../../shared/Material.Module';
import { JobSeekerProfilePageComponent } from './job-seeker-profile-page/job-seeker-profile-page.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobSeekerModuleModule } from '../job-seeker-module.module';

@NgModule({
  declarations: [
    PersonalProfileComponent,
    EducationComponent,
    ExperienceComponent,
    SocialComponent,
    JobSeekerProfileTabComponent,
    JobSeekerProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    JobSeekerModuleModule
  ]
})
export class ProfileModule { }
