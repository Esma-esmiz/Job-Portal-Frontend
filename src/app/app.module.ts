import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/Material.Module';
import { GustHeaderComponent } from './pages/header/gust-header/gust-header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './core/shell/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GustSearchComponent } from './core/shell/footer/gust-search/gust-search.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JobModuleModule } from './modules/job-module/job-module.module';
import { JobListingPageComponent } from './pages/job-listing-page/job-listing-page.component';
import { JobGustNavComponent } from './core/shell/job-gust-nav/job-gust-nav.component';
import { LandingNavComponent } from './core/shell/landing-nav/landing-nav.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    GustHeaderComponent,
    FooterComponent,
    GustSearchComponent,
    HomePageComponent,
    JobListingPageComponent,
    JobGustNavComponent,
    LandingNavComponent,
    JobDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule,
    JobModuleModule,
  ],
   
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
