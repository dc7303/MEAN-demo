import { Component, OnInit } from '@angular/core';

import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: object[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userFindAll()
      .subscribe(
        res => {
          for(let index in res) {
            this.users.push(res[index]);
          }
        },
        err => console.log(err)
      );
  }

  userDelete(userId: string) {
    this.userService.userDelete(userId)
      .subscribe(
        res => console.log('user.component.userDelete ..'),
        err => console.error(err)
      )
  }

}
