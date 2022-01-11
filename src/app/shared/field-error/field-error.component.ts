import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent implements OnInit {
  @Input() control: any;
  @Input() controlName: string;
  showError: boolean;
  errorText: string;

  constructor(private controlContainer: ControlContainer) {
    this.control = '';
    this.controlName = '';
    this.errorText = '';
    this.showError = false;
  }

  ngOnInit(): void {
    this.checkField();
  }

  checkField(): void {
    this.showError = this.control.status !== 'VALID' ? true : false;
    switch(this.controlName) {
      case 'email':
        this.errorText = 'Invalid email. Provide valid email';
        break;
    }
  }

}
