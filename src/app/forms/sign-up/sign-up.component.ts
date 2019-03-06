import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../service/nav/auth.service';
import { User } from '../../interface/userInfo';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private signUpForm = new FormGroup({
    userId: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9a-zA-Z]{4,12}')
    ]),
    userPwd: new FormControl('', Validators.required),
    name: new FormControl(''),
    email: new FormControl('')
  });
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }

  signUp(user: User): void {
    this.authService.signUp(user)
      .subscribe(
        () => {},
        err => console.log(`angular :: ${JSON.stringify(err)}`),
        () => this.router.navigateByUrl('/')
      );
  }

  cancle() {
    this.router.navigateByUrl('/');
  }

}
