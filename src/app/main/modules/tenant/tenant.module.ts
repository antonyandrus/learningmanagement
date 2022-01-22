import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantRoutingModule } from './tenant-routing.module';
import { TenantComponent } from './tenant.component';
import { ListComponent } from './components/list/list.component';
import { PrimecomponentsModule } from 'src/app/primecomponents/primecomponents.module';


@NgModule({
  declarations: [
    TenantComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,
    PrimecomponentsModule
  ]
})
export class TenantModule { }
