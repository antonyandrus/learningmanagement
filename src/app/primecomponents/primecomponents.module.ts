import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
  declarations: [
    TableComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule,
  ],
  exports: [
    CheckboxModule,
    ButtonModule,
    DialogComponent,
    InputTextModule,
    TableComponent
  ]
})
export class PrimecomponentsModule { }
