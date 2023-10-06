import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, map } from 'rxjs';
import { Global } from '../core/global';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public profileImage: Subject<string>;
  constructor(
    private http: HttpClient,
    private globals: Global,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.profileImage = new Subject<string>();
  }

  login(model: any) {
    return this.http
      .post<any>(environment.baseUrl + 'auth/admin/login', model)
      .pipe(
        map((response: any) => {
          if (response) {
            localStorage.setItem('', response.token.token);
            localStorage.setItem('', JSON.stringify(response.userInfo));
            let user: any = localStorage.getItem('');
            this.globals.currentUser = JSON.parse(user);
            this.profileImage.next(this.globals.currentUser.imageURL);
            if (this.globals.currentUser.userRoleId != 1) {
              this.logout();
              this.toastr.error('ليس لديك صلاحية الدخول');
            } else {
              this.toastr.success('تم تسجيل الدخول بنجاع');
              this.router.navigate(['/']);
            }
          }
        })
      );
  }

  LoggedIn() {
    // const token = localStorage.getItem('');
    // return !!token;
    return true;
  }

  logout() {
    localStorage.removeItem('');
    this.globals.currentUser = '';
    this.router.navigate(['/login']);
  }
}
