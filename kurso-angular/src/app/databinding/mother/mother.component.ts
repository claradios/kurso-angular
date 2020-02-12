import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from './../../first.service';
@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css']
})
export class MotherComponent implements OnInit {
  messageToChild: string;
  messageFromChild: string;
  constructor(private firstService: FirstService, private router: Router) { }

  ngOnInit(): void {
    this.messageToChild = 'Yo soy tu madre';
  }
  responseFromChild(ev) {
    this.messageFromChild = ev;
  }
  onClick() {
    this.messageToChild = this.firstService.getMessage();
  }
  nav() {
    this.router.navigate( ['directivas']);
    }
  nav2() {
      this.router.navigate(['databinding', '123']);
    }
}
