import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserMessageFormComponent } from '../user-message-form/user-message-form.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  itemId: any = null;
  isShowDetails: boolean = false;
  page: number = 1;
  per_page: number = 4;
  users: User[] = [];
  userItem: User = {};
  constructor(
    private dialog: MatDialog,
    private toastr: ToastrService,
    private _UserService: UserService
  ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  showDetails(userItem: User) {
    this.itemId = userItem.id;
    this.isShowDetails = true;
    this.userItem = userItem;
  }

  hideDetails() {
    this.itemId = null;
    this.isShowDetails = false;
  }

  getAllUsers() {
    this._UserService
      .getUsers(this.page, this.per_page)
      .subscribe((res: User[] | any) => {
        this.users = res.data;
      });
  }

  trackByFn(index: number, item: User) {
    return item.id;
  }

  addUser() {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '363px',
      disableClose: false,
      data: {
        action: 'Add',
      },
    });
    dialogRef.afterClosed().subscribe(
      (data: User) => {
        if (data) {
          this._UserService.createUser(data).subscribe((res: any) => {
            this.toastr.success('The user creation was successful.');
            this.getAllUsers();
          });
        }
      },
      (err: any) => {
        this.toastr.error('The user was not created successfully!');
      }
    );
  }

  updateUser(userItem: any) {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '363px',
      disableClose: false,
      data: {
        action: 'Save',
        user: userItem,
      },
    });
    dialogRef.afterClosed().subscribe(
      (data: User) => {
        if (data) {
          this._UserService
            .updateUser(userItem.id, data)
            .subscribe((res: any) => {
              this.toastr.success('The user updated has been successfully.');
              this.getAllUsers();
            });
        }
      },
      (err: any) => {
        this.toastr.error('The user was not updated successfully!');
      }
    );
  }

  deleteUser(userItem: any) {
    const dialogRef = this.dialog.open(UserMessageFormComponent, {
      width: '363px',
      disableClose: false,
      data: {
        action: 'Delete',
        user: userItem,
      },
    });
    dialogRef.afterClosed().subscribe(
      (state: boolean) => {
        if (state) {
          this._UserService.deleteUser(userItem.id).subscribe((res: any) => {
            this.toastr.success('The user deleted has been successfully.');
            this.getAllUsers();
          });
        }
      },
      (err: any) => {
        this.toastr.error('The user was not deleted successfully!');
      }
    );
  }
}
