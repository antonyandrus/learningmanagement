import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customresponse } from '../pojos/customresponse';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  constructor() { }

  private breadCrumbSubject = new Subject<any>();

  sendClickEvent() {
    this.breadCrumbSubject.next(0);
  }

  getClickEvent(): Observable<any>{
    return this.breadCrumbSubject.asObservable();
  }

}
