import { Component } from '@angular/core';
import {faArrowRight, faRulerCombined} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  faArrowRight=faArrowRight;
  faRulerCombined=faRulerCombined;
  items =[1,2,3,5,6,5,7,5,8,6];
}
