import { Injectable, OnInit } from '@angular/core';
import { Customresponse } from '../pojos/customresponse';
import { ObserverService } from './observer.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService implements OnInit{

  constructor() { }

  ngOnInit(): void { }

  initializeCustomResponse(): Customresponse {
    return new Customresponse();
  }
}
