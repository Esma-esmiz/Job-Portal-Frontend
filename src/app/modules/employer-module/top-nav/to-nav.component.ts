import { formatDate, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-top-nav',
  templateUrl: './to-nav.component.html',
  styleUrl: './to-nav.component.css',
})
export class TopNavComponent {
  faBell = faBell;
  faEnvelope = faEnvelope;
 }
