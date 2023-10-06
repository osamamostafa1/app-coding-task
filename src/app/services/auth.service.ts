import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from '../core/global';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private global: Global
  ) {}

  login(model: any) {
    return this.http.post<any>(environment.baseUrl + 'login', model).pipe(
      map((response: any) => {
        if (response) {
          localStorage.setItem('app-coding-task-token', response.token);
          localStorage.setItem(
            'app-coding-task-user',
            JSON.stringify({ user: 'test' })
          );
          let user: any = localStorage.getItem('app-coding-task-user');
          this.global.currentUser = JSON.parse(user);
          this.toastr.success('Logged in successfully');
          this.router.navigate(['/users']);
        } else {
          this.logout();
          this.toastr.error('The password or email is incorrect');
        }
      })
    );
  }

  LoggedIn() {
    const token = localStorage.getItem('app-coding-task-token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('app-coding-task-token');
    localStorage.removeItem('app-coding-task-user');
    this.global.currentUser = undefined;
    this.router.navigate(['/auth/login']);
  }
}
