import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-coding-task';
  constructor(public _SidebarService: SidebarService) {}

  closeSidebar() {
    this._SidebarService.sideBarSubject.next('close');
  }
}
