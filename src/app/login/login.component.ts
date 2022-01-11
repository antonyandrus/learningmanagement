import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  logInForm: FormGroup;
  isSubmitted: boolean;
  formFieldSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.logInForm = this.getLogInForm();
    this.isSubmitted = false;
    this.formFieldSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.formFieldSubscription = this.logInForm.valueChanges.subscribe(val => {
      this.isSubmitted = false;
    });
  }

  ngOnDestroy(): void {
      this.formFieldSubscription.unsubscribe();
  }

  getLogInForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: ['']
    });
  }

  login(): void {
    this.isSubmitted = true;
    console.log(this.logInForm.value);
  }

}
