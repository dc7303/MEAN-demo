import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './main/nav/nav.component';
import { AuthComponent } from './main/nav/auth/auth.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { MainComponent } from './dashboard/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    SignUpComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
