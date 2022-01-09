import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    CheckboxModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimecomponentsModule { }
