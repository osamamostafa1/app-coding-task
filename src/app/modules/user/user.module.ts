import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserMessageFormComponent } from './components/user-message-form/user-message-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserMessageFormComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //materials
    MatDialogModule,
  ],
})
export class UserModule {}
