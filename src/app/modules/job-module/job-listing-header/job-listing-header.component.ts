import { Component } from '@angular/core';
import {faList, faGrip} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-job-listing-header',
  templateUrl: './job-listing-header.component.html',
  styleUrl: './job-listing-header.component.css'
})
export class JobListingHeaderComponent {
  faList=faList;
  faGrip=faGrip;

}
