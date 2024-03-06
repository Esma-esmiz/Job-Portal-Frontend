import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobModuleRoutingModule } from './job-module-routing.module';
import { JobByCategoryComponent } from './job-by-category/job-by-category.component';
import { MaterialModule } from '../../shared/Material.Module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobFilterSelectedComponent } from './job-filter-selected/job-filter-selected.component';
import { JobFilterBoxComponent } from './job-filter-box/job-filter-box.component';
import { JobListingCardComponent } from './job-listing-card/job-listing-card.component';
import { JobListingHeaderComponent } from './job-listing-header/job-listing-header.component';

@NgModule({
  declarations: [
    JobByCategoryComponent,
    JobFilterSelectedComponent,
    JobFilterBoxComponent,
    JobListingCardComponent,
    JobListingHeaderComponent
  ],
  imports: [
    CommonModule,
    JobModuleRoutingModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports:[
    JobByCategoryComponent,
    JobFilterBoxComponent,
    JobFilterSelectedComponent,
    JobListingCardComponent,
    JobListingHeaderComponent
  ]
})
export class JobModuleModule { }
