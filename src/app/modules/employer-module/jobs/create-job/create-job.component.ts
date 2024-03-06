import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { MatHint } from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
import { EditJobComponent } from '../edit-job/edit-job.component';
@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent  implements AfterViewInit {
  @ViewChild(EditJobComponent) tagVisible:any;
  addJobTagVisiblity:boolean= true;
 
  faArrowLeft=faArrowLeft;
  toppings = new FormControl('');
  toppingList: string[] = ['Full Time', 'Part Time', 'Remote', 'Contract', 'On-site', 'Intern'];
  ngAfterViewInit(){
    this.addJobTagVisiblity = this.tagVisible.addJobTagVisible;
  }
}
