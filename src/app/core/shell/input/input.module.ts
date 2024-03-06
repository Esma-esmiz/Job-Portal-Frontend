import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MaterialModule } from '../../../shared/Material.Module';


@NgModule({
  declarations: [
    DateRangePickerComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    DateRangePickerComponent
  ]
})
export class InputModule { }
