import { Component } from '@angular/core';
import { faGauge, faBriefcase, faUserGroup, faHandshake, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  faGauge=faGauge;
  faBriefcase=faBriefcase;
  faUserGroup=faUserGroup;
  faHandshake=faHandshake;
  faGear=faGear;
}
