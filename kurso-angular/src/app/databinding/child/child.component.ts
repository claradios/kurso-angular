import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  @Output() reply = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    // this.reply.emit('Me has dicho' + this.message);
  }
  onReplay() {
    this.reply.emit('Me has dicho' + this.message);
  }
}
