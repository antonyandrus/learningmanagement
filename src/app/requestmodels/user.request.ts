export class LogInRequest {
  email: string;
  password: string;
  rememberme: boolean;

  constructor() {
    this.email = '';
    this.password = '';
    this.rememberme = false;
  }
}
