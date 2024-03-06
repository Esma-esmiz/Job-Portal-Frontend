import { Component } from '@angular/core';
import {faBookmark} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-job-listing-card',
  templateUrl: './job-listing-card.component.html',
  styleUrl: './job-listing-card.component.css'
})
export class JobListingCardComponent {
  faBookmark=faBookmark;
  items=[1,2,2,5]

}
