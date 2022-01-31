import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor() { }

  private itemsSource = new Subject<MenuItem[]>();
  private loadedPage = new Subject<string>();

  itemsHandler = this.itemsSource.asObservable();
  loadedPageNameHandler = this.loadedPage.asObservable();

  setItems(items: MenuItem[]) {
    this.itemsSource.next(items);
  }

  setPageName(pageName: string) {
    this.loadedPage.next(pageName);
  }
}
