import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ApplicationsComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'Position', 'Status', 'Experience'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
  name: string;
  Experience: number;
  Position: number;
  Status: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Experience: 1,
    name: 'Hydrogen',
    Position: 1.0079,
    Status: 'H',
    description: `Hydrogen is a chemical element with Status H and atomic number 1. With a standard
        atomic Position of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    Experience: 2,
    name: 'Helium',
    Position: 4.0026,
    Status: 'He',
    description: `Helium is a chemical element with Status He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    Experience: 3,
    name: 'Lithium',
    Position: 6.941,
    Status: 'Li',
    description: `Lithium is a chemical element with Status Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    Experience: 4,
    name: 'Beryllium',
    Position: 9.0122,
    Status: 'Be',
    description: `Beryllium is a chemical element with Status Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  } 
];