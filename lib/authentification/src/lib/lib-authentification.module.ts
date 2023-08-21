import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LoginComponent,
    NewAccountComponent,
    ResetPasswordComponent,
  ],
  exports: [LoginComponent, NewAccountComponent, ResetPasswordComponent],
})
export class LibAuthentificationModule {}
