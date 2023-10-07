import { User } from './../core/model/user.model';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('Service: User', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  const mockData = {
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
      {
        id: 8,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'Lindsay',
        last_name: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
      },
    ],
  };
  const singleMockData = {
    data: {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
    support: {
      url: 'https://reqres.in/#support-heading',
      text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('getAll Users should make a GET HTTP request and return all data items', () => {
    service.getUsers(1, 2).subscribe((res) => {
      expect(res).toEqual(mockData);
      expect(res.data.length).toBe(2);
    });
    const req = httpTestingController.expectOne(
      environment.baseUrl + 'users?page=1&per_page=2'
    );
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(mockData);
    httpTestingController.verify();
  });

  it('getById should make a GET HTTP request with id appended to end of url', () => {
    service.getUser(1).subscribe((res) => {
      expect(res).toEqual(singleMockData);
    });
    const req = httpTestingController.expectOne(
      environment.baseUrl + 'users/1'
    );
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(singleMockData);
    httpTestingController.verify();
  });

  it('create User should make a POST HTTP request with resource as body', () => {
    const createObj: User = { first_name: 'Michael', last_name: 'Lawson' };
    service.createUser(createObj).subscribe((res) => {
      expect(res.first_name).toBe('Michael');
    });
    const req = httpTestingController.expectOne(environment.baseUrl + 'users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(createObj);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(createObj);
    httpTestingController.verify();
  });

  it('update User should make a PUT HTTP request with id appended to end of url and resource as body', () => {
    const updateObj: User = { first_name: 'Michael', last_name: 'Lawson' };
    service.updateUser(1, updateObj).subscribe((res) => {
      expect(res.first_name).toBe('Michael');
    });
    const req = httpTestingController.expectOne(
      environment.baseUrl + 'users/1'
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toBe(updateObj);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(updateObj);
    httpTestingController.verify();
  });

  it('delete User should make a DELETE HTTP request with id appended to end of url', () => {
    service.deleteUser(1).subscribe((res: any) => {
      expect(res).toBe(1);
    });
    const req = httpTestingController.expectOne(
      environment.baseUrl + 'users/1'
    );
    expect(req.request.method).toBe('DELETE');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(1);
    httpTestingController.verify();
  });
});
