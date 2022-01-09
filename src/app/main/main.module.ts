import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RightpanelComponent } from './components/rightpanel/rightpanel.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimecomponentsModule } from '../primecomponents/primecomponents.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    TopbarComponent,
    RightpanelComponent,
    MenuComponent,
    MenuitemComponent,
    BreadcrumbComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimecomponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
