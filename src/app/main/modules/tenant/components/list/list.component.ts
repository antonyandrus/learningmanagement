import { Component, OnInit } from '@angular/core';
import { TableConfig } from 'src/app/pojos/primecomponents/table-config';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tableConfig: TableConfig = new TableConfig();

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'List' }
  ]);
  }

  ngOnInit(): void {
  }

}
