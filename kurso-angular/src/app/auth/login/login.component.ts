import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonValidator } from '../../common-validator';
import { LoginService } from '../login.service';
import { TokenDTO } from '../token.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  userToken: TokenDTO;
  sub: Subscription;
  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          CommonValidator.startWithNumber
        ],
        [CommonValidator.userTaken]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  onSend() {
    this.sub = this.service.getUserToken(this.form.value).subscribe(
      response => {
        this.userToken = response;
        sessionStorage.setItem('token', this.userToken.access_token);
      },
      error => console.log(error));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
