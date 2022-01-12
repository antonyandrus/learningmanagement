import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customresponse } from '../pojos/customresponse';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  constructor() { }

  private customResponseSubject = new Subject<any>();
  customResponseObservable$ = this.customResponseSubject.asObservable();

  initializeCustomResponseObservable(value: any) {
    return this.customResponseSubject.next(value);
  }
}
