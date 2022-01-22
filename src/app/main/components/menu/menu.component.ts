import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  model: any[];

  constructor(public app: AppComponent) {
    this.model = [];
  }

  ngOnInit(): void {
    this.model = [
      {
        items: [
          { label: 'Tenant', icon: 'pi pi-fw pi-home', routerLink: ['/tenant/list'] }
        ]
      }
    ];
  }

}
