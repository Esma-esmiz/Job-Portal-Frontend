import { Component } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { MatHint } from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent {
  faArrowLeft=faArrowLeft;
  toppings = new FormControl('');
  toppingList: string[] = ['Full Time', 'Part Time', 'Remote', 'Contract', 'On-site', 'Intern'];
}
