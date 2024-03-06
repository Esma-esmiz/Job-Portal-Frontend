import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  panelOpenState = false;
  experiences=[1,2,3]
  skills=[1,2,3]
}
