import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenDTO } from './token.dto';
// export interface UserToken {
// expires_in: number;
// access_token: string;
// }

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              @Inject('config') private config) { }
  getUserToken(body): Observable<TokenDTO> {
    return this.http.post<TokenDTO>(this.config.api + 'auth', body);
  }
}
// this.config.api + 'auth'
// 'http://localhost:3001/auth/'
