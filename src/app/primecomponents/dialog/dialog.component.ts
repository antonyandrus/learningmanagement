import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DialogConfig } from 'src/app/pojos/primecomponents/dialog-config';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() config: DialogConfig = new DialogConfig;
  @Input() content!: TemplateRef<any>;
  @Output() cancelCallBack: EventEmitter<any> = new EventEmitter();
  @Output() actionCallBack: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.config);
  }

  onCancelClick(): void {
    this.cancelCallBack.emit();
  }

  onActionClick(): void {
    this.actionCallBack.emit();
  }

}
