import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { UsersProxyService } from './users-proxy.service';
import { UserDTO } from './users.dto.model';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private proxy: UsersProxyService) { }
  getUsers(): Observable<User[]> {
    return this.proxy.getUsers().pipe(
      map((UsersDTO: UserDTO[]) => {
        const users: User[] = [];
        return  UserDTO.map((userDTO: UserDTO) => {
          const user: User = {
            city: userDTO.address.city,
            email: userDTO.email,
            name: userDTO.name,
            phone : userDTO.phone,
            username : userDTO.username
          };
        };
      });
    return users;
  }
    ))
}
}
