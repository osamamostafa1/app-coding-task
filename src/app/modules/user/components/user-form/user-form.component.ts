import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  actionName: string = 'Add';
  reactiveForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.reactiveForm = this.createForm();
  }

  ngOnInit() {
    if (this.data != null) {
      this.actionName = this.data?.action;
      this.reactiveForm.patchValue({
        first_name: this.data.user?.first_name,
        last_name: this.data.user?.last_name,
      });
    }
  }

  createForm() {
    return this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      this.dialogRef.close(this.reactiveForm.value);
    } else {
      this.reactiveForm.markAllAsTouched();
    }
  }

  closeModal() {
    this.dialogRef.close(false);
  }
}
