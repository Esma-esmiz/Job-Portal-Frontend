import { Component } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.css',
  providers: [MatNativeDateModule],
})
export class DateRangePickerComponent {

}
