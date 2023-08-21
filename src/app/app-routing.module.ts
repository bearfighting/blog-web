import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAccountComponent } from 'lib/authentification/src/lib/new-account/new-account.component';
import { LoginComponent } from 'lib/authentification/src/lib/login/login.component';
import { ResetPasswordComponent } from 'lib/authentification/src/lib/reset-password/reset-password.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "new-account", component: NewAccountComponent},
  {path: "reset-password", component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
