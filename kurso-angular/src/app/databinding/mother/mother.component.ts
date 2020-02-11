import { Component, OnInit } from '@angular/core';
import { FirstService } from './../../first.service';
@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css']
})
export class MotherComponent implements OnInit {
  messageToChild: string;
  messageFromChild: string;
  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
    this.messageToChild = 'Yo soy tu madre';
  }
  responseFromChild(ev) {
    this.messageFromChild = ev;
  }
  onClick() {
    this.messageToChild = this.firstService.getMessage();
  }
}
