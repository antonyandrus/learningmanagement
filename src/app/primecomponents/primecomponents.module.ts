import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component'

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TableComponent
  ]
})
export class PrimecomponentsModule { }
