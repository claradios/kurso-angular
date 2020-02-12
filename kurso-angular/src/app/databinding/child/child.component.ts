import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/auth/confirm.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, CanComponentDeactivate {
  @Input() message: string;
  @Output() reply = new EventEmitter<string>();
  saved: boolean;
  child: string;
  q: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.saved = false;
    this.child = this.activatedRoute.snapshot.params.child;
    this.activatedRoute.queryParams.subscribe((queryParams) =>
      this.q = queryParams.q
    );
  }
  onReplay() {
    this.reply.emit('Me has dicho' + this.message);
  }
  onSave() {
    this.saved = true;
  }
  canDeactivate(): boolean {
    if (this.saved) {
      return true;
    } else {
      return confirm('Seguro que quieres salir sin guardar');
    }
  }
}
