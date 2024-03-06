import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerModuleRoutingModule } from './employer-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from '../../shared/Material.Module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavComponent } from './top-nav/to-nav.component';
import { WidgetComponent } from './widget/widget.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    TopNavComponent,
    WidgetComponent,
    ApplicationsComponent,
    DashboardContentComponent,
    
  ],
  imports: [
    CommonModule,
    EmployerModuleRoutingModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class EmployerModuleModule { }
