import { TestBed } from '@angular/core/testing';
import { ServiceService } from './service.service';
import { FAKE_USERS } from './users-fake.spec';
import { UsersService } from './users.service';


describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should adapt userDTO to user', () => {
    const service: UsersService = TestBed.get(UsersService),; 'getUsers'; ).and.callFake(
      () => of(FAKE_USERS)
    );
  const service: UsersService = TestBed.get(UsersService);
  service.getUsers().subscribe((users: User[]) => {
    expect(users[0].city).toEqual(FAKE_USERS[0].address.city);
    expect(users[0].city).toEqual(FAKE_USERS[0].email);
    expect(users[0].city).toEqual(FAKE_USERS[0].name);
    expect(users[0].city).toEqual(FAKE_USERS[0].phone);
    expect(users[0].city).toEqual(FAKE_USERS[0].username);

  });
});
})
