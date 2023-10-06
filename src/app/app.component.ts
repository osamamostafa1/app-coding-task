import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';
import { Global } from '../app/core/global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-coding-task';
  constructor(public _SidebarService: SidebarService, private global: Global) {
    const curentuser = localStorage.getItem('app-coding-task-user');
    if (curentuser) {
      this.global.currentUser = JSON.parse(curentuser);
    }
  }

  closeSidebar() {
    this._SidebarService.sideBarSubject.next('close');
  }
}
