import { Component } from '@angular/core';
import {faPen}  from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-job-seeker-profile-page',
  templateUrl: './job-seeker-profile-page.component.html',
  styleUrl: './job-seeker-profile-page.component.css'
})
export class JobSeekerProfilePageComponent {
  faPen=faPen;
  list=[1,2,3]
}
