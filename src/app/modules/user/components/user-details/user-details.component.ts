import { UserService } from 'src/app/services/user.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  // userId: number = 0;
  // userData: User = {};
  @Input() user: User = {};
  @Output() editUserEmitter = new EventEmitter<User>();
  @Output() deleteUserEmitter = new EventEmitter<User>();

  constructor() // private _UserService: UserService,
  // private activatedRoute: ActivatedRoute
  {
    // this.activatedRoute.params.subscribe((params: any) => {
    //   this.userId = params.id;
    // });
  }
  ngOnInit() {
    // this.getUserById();
  }

  // If you can get the user by ID from the server I have two ways
  // 1 - Get ID by ActivatedRoute and use getUserById() method
  // 2 - get id from @input() Decorator and use getUserById() method
  // In this case, I use to share data between parent and child directly by @input() and @Output() Decorators

  // getUserById() {
  //   this._UserService.getUser(this.userId).subscribe((res: User) => {
  //     this.userData = res;
  //   });
  // }

  editItem(userItem: any) {
    this.editUserEmitter.emit(userItem);
  }
  deleteItem(userItem: any) {
    this.deleteUserEmitter.emit(userItem);
  }
}
