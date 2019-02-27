import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../interface/userInfo';
import { AuthService } from '../../../service/nav/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() login: boolean
  private inputId: string;
  private currentUser: string;
  name:string;

  private signInForm = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
    userPwd: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  signIn(user: User): void {
    this.authService.signIn(user).subscribe(
      res => {
        if(res as object !== null) {
          this.login = true;
          this.currentUser = res.userId;
        }else {
          console.log('재입력 요청')
        }
      },
      err => console.log(`auth-component error :: ${err}`)
    );
  }

  logout() {
    this.login = false;
  }

  goSignUpForm() {
    this.router.navigateByUrl('/signUpForm');
  }
}
