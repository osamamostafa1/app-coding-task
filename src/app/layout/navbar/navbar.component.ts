import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Global } from '../../core/global';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private _SidebarService: SidebarService,
    public global: Global,
    private _AuthService: AuthService
  ) {}

  toggleSideBar() {
    this._SidebarService.changeSideBar();
  }

  logout() {
    this._AuthService.logout();
  }
}
