import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.logInForm = this.getLogInForm();
  }

  ngOnInit(): void {
  }

  getLogInForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberme: ['']
    });
  }

  login(): void {
    console.log(this.logInForm.value);
  }

}
