import { Injectable } from '@angular/core';
import { apiList } from '../constants/api.constant';
import { Customresponse } from '../pojos/customresponse';
import { NewTenantRequest } from '../requestmodels/new-tenant-request.request';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  customResponse: Customresponse = new Customresponse();

  constructor(private apiService: ApiService) { }

  saveTenant(request: NewTenantRequest, response: any): void {
    this.apiService.post(apiList.savetenant, request).subscribe(
      (data: any) => {
        console.log(data);
        this.customResponse.data = data;
        response(this.customResponse);
      },
      (error: any) => {

      }
    );
  }
}
