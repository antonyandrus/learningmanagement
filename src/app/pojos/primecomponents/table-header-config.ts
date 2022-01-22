export class TableHeaderConfig {
  name: string;
  headerRow: Array<TableHeaderRowData>;

  constructor() {
    this.name = '';
    this.headerRow = [];
  }
}

export class TableHeaderRowData {
  fieldName: string;
  headerName: string;

  constructor() {
    this.fieldName = '';
    this.headerName = '';
  }
}
