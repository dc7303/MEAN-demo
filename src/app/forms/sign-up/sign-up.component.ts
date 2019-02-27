import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    userId: new FormControl(''),
    userPwd: new FormControl(''),
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
