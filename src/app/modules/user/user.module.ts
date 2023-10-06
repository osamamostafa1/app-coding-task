import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserMessageFormComponent } from './components/user-message-form/user-message-form.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserMessageFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }