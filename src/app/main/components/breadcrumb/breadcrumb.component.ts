import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { ObserverService } from 'src/app/services/observer.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  subscription: Subscription;

  items: MenuItem[] = [];
  pageName: string = '';

  constructor(public breadcrumbService: BreadcrumbService, private observerService: ObserverService) {
    this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
      this.items = response;
    });
    this.subscription = breadcrumbService.loadedPageNameHandler.subscribe(response => {
      this.pageName = response;
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addNew(): void {
    this.observerService.sendClickEvent();
  }

}
