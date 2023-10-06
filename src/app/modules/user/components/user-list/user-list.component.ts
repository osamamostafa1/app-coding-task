import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserMessageFormComponent } from '../user-message-form/user-message-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private dialog: MatDialog, private toastr: ToastrService) {}
  ngOnInit() {}
  itemId: any = null;
  isShowDetails: boolean = false;

  showDetails(id: any) {
    this.itemId = id;
    this.isShowDetails = true;
  }

  hideDetails() {
    this.itemId = null;
    this.isShowDetails = false;
  }

  addUser() {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '363px',
      disableClose: false,
      data: {
        action: 'Add',
      },
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
      }
    });
  }

  editUser(item: any) {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '363px',
      disableClose: false,
      data: {
        action: 'Edit',
      },
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
      }
    });
  }

  deleteUser(item: any) {
    const dialogRef = this.dialog.open(UserMessageFormComponent, {
      width: '363px',
      disableClose: false,
      data: {
        action: 'Delete',
      },
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
      }
    });
  }
}
