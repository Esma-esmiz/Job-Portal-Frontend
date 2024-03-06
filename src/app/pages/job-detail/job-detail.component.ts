import { Component } from '@angular/core';
import {faBookmark, faShareSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  faShare=faShareSquare;
  faBookmark=faBookmark
}
