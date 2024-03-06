import { faBriefcase, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { faClipboard, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
  faChevronRight=faChevronRight;
  faBriefcase=faBriefcase;
  faClipboard=faClipboard;
  faCircleQuestion=faCircleQuestion;
}
