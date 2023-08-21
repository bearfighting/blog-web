import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  goResetPassword() {
    this.router.navigate(["/reset-password"]);
  }

  goNewAccount() {
    this.router.navigate(["/new-account"]);
  }
}
