import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiList } from '../constants/api.constant';
import { Customresponse } from '../pojos/customresponse';
import { LogInRequest } from '../requestmodels/user.request';
import { ApiService } from './api.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  customResponse: Customresponse = new Customresponse();

  constructor(private apiService: ApiService, private utilityService: UtilityService) {

  }

  login(request: LogInRequest, response: any): void {
    this.apiService.post(apiList.login, request).subscribe((data: HttpResponse<any>) => {
      // console.log(data);
    });
  }
}
