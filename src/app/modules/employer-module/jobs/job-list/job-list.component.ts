import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  displayedColumns: string[] = ['job', 'status', 'applicant', 'location', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  status: string;
  job: number;
  applicant: number;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {job: 1, status: 'Hydrogen', applicant: 1.0079, location: 'H'},
  {job: 2, status: 'Helium', applicant: 4.0026, location: 'He'},
  {job: 3, status: 'Lithium', applicant: 6.941, location: 'Li'},
  {job: 4, status: 'Beryllium', applicant: 9.0122, location: 'Be'},
  {job: 5, status: 'Boron', applicant: 10.811, location: 'B'},
  {job: 6, status: 'Carbon', applicant: 12.0107, location: 'C'},
  {job: 7, status: 'Nitrogen', applicant: 14.0067, location: 'N'},
  {job: 8, status: 'Oxygen', applicant: 15.9994, location: 'O'},
]
