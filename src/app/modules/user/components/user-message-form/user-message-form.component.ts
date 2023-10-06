import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-message-form',
  templateUrl: './user-message-form.component.html',
  styleUrls: ['./user-message-form.component.scss'],
})
export class UserMessageFormComponent {
  constructor(
    private dialogRef: MatDialogRef<UserMessageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.dialogRef.close(true);
  }

  closeModal() {
    this.dialogRef.close(false);
  }
}
