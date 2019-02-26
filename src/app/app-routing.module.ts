import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './dashboard/main/main.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'signUpForm', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
