import { Component, Input, OnInit } from '@angular/core';
import { TableConfig } from 'src/app/pojos/primecomponents/table-config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() config: TableConfig = new TableConfig();


  constructor() { }

  ngOnInit(): void {
  }

}
