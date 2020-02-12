import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  @Output() reply = new EventEmitter<string>();

  child: string;
  constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit(): void {
  this.child = this.activatedRoute.snapshot.params.child;
  }
onReplay() {
  this.reply.emit('Me has dicho' + this.message);
}
}
