import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  signupUser(requestDatas: any): Observable<any> {
    return this.http.post<any>(
      `${this.API_URL}/user`,
       '{"name":"dffad","email":"sadfds","password":"sadfd"}'
    );
  }

  authUser(requestDatas: AuthRequest): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth`, requestDatas);
  }
}
