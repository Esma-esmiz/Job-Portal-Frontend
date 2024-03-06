import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-job-by-category',
  templateUrl: './job-by-category.component.html',
  styleUrl: './job-by-category.component.css'
})
export class JobByCategoryComponent {
  faArrowRight=faArrowRight;
  items =[1,2,3,5,6,5];

}
