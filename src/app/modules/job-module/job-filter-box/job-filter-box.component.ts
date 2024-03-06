import { Component } from '@angular/core';

@Component({
  selector: 'app-job-filter-box',
  templateUrl: './job-filter-box.component.html',
  styleUrl: './job-filter-box.component.css'
})
export class JobFilterBoxComponent {
  panelOpenState = false;
  typesOfShoes: string[] = ['Full Time', 'Part Time', 'Contact'];
}
