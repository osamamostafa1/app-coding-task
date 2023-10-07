import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageFormComponent } from './user-message-form.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

describe('UserMessageFormComponent', () => {
  let component: UserMessageFormComponent;
  let fixture: ComponentFixture<UserMessageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMessageFormComponent],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(UserMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
