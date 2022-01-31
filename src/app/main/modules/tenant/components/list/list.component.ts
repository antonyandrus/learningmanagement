import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Customresponse } from 'src/app/pojos/customresponse';
import { DialogConfig } from 'src/app/pojos/primecomponents/dialog-config';
import { TableConfig } from 'src/app/pojos/primecomponents/table-config';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { ObserverService } from 'src/app/services/observer.service';
import { TenantService } from 'src/app/services/tenant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tableConfig: TableConfig = new TableConfig();
  subscription: Subscription;
  showAddTenantModal: boolean = false;
  addTenantConfig: DialogConfig = new DialogConfig();
  tenantFormGroup: FormGroup = this.generateTenantForm();
  submitted: boolean = false;


  constructor(private breadcrumbService: BreadcrumbService, private observerService: ObserverService, private formBuilder: FormBuilder, private tenantService: TenantService) {
    this.breadcrumbService.setItems([
      { label: 'List' }
    ]);
    this.breadcrumbService.setPageName('tenant');
    this.subscription = this.observerService.getClickEvent().subscribe(() => {
      this.newTenant();
    });
  }

  ngOnInit(): void {
  }

  ngDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  generateTenantForm(): FormGroup {
    return this.formBuilder.group({
      tenantName: ['', Validators.required],
      tenantEmail: ['', Validators.required],
      primaryFirstName: [''],
      primaryLastName: [''],
      primaryEmail: ['', Validators.required],
      primaryPhone: [''],
      addressOne: [''],
      addressTwo: [''],
      city: [''],
      state: [''],
      zipCode: [''],
      country: [''],
      tenantPhone: ['']
    })
  }

  newTenant(): void {
    this.addTenantConfig.header = 'Add Tenant';
    this.addTenantConfig.modal = true;
    this.addTenantConfig.visible = true;
    this.addTenantConfig.width.width = '900px';
    this.showAddTenantModal = true;
  }

  cancelTenantModal(): void {
    this.showAddTenantModal = false;
    this.addTenantConfig = new DialogConfig();
  }

  saveTenant(): void {
    this.submitted = true;
    this.tenantService.saveTenant(this.formValues, (response: Customresponse) => {
      console.log(response);
    });
  }

  get formControls() {
    return this.tenantFormGroup.controls;
  }

  get formValues() {
    return this.tenantFormGroup.value;
  }

}
