import { Component } from '@angular/core';
import {
  faUser,
  faBriefcase,
  faCommentDots,
  faBell,
  faPen
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-seeker-nav',
  templateUrl: './job-seeker-nav.component.html',
  styleUrl: './job-seeker-nav.component.css',
})
export class JobSeekerNavComponent {
  faUser = faUser;
  faBriefcase = faBriefcase;
  faCommentDots = faCommentDots;
  faBell = faBell;
  faPen=faPen;
}
