import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../core/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(page: number, per_page: number): Observable<User[] | any> {
    return this.http.get(
      environment.baseUrl + `users?page=${page}&per_page=${per_page}`
    );
  }
  createUser(model: User): Observable<User> {
    return this.http.post<User>(environment.baseUrl + 'users', model);
  }
  getUser(id: User): Observable<User> {
    return this.http.get(environment.baseUrl + 'users/' + id);
  }
  updateUser(id: number, model: User) {
    return this.http.put<User>(environment.baseUrl + 'users/' + id, model);
  }
  deleteUser(id: User): Observable<User> {
    return this.http.delete(environment.baseUrl + 'users/' + id);
  }
}
