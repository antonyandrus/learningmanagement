import { TableHeaderConfig } from "./table-header-config";

export class TableConfig {
  list: Array<any>;
  selected: any;
  key: string;
  selectionMode: string;
  scrollable: boolean;
  scrollHeight: string;
  filterDelay: number;
  filterFields: Array<string>;
  tableHeader: TableHeaderConfig;

  constructor() {
    this.list = [];
    this.key = ''
    this.selectionMode = 'single';
    this.scrollable = true;
    this.scrollHeight = '600px';
    this.filterDelay = 0;
    this.filterFields = [];
    this.tableHeader = new TableHeaderConfig();
  }

}
