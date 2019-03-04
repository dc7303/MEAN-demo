import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TuiModule } from 'ngx-tui-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './main/nav/nav.component';
import { AuthComponent } from './main/nav/auth/auth.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { MainComponent } from './dashboard/main/main.component';
import { UserComponent } from './dashboard/user/user.component';
import { BoardComponent } from './main/nav/board/board.component';
import { AuthInterceptiorService } from './service/auth.interceptior.service';

/** Interceptor Provider */
const interceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptiorService,
  multi: true
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AuthComponent,
    SignUpComponent,
    MainComponent,
    UserComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TuiModule
  ],
  providers: [interceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
