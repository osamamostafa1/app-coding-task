import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() user: User = {};
  @Output() editUserEmitter = new EventEmitter<User>();
  @Output() deleteUserEmitter = new EventEmitter<User>();

  editItem(userItem: any) {
    this.editUserEmitter.emit(userItem);
  }
  deleteItem(userItem: any) {
    this.deleteUserEmitter.emit(userItem);
  }
}
