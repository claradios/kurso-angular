import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directivas',
  templateUrl: './example-directivas.component.html',
  styleUrls: ['./example-directivas.component.css']
})
export class ExampleDirectivasComponent implements OnInit {
  colors: string[];
  constructor() { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'green', 'orange', 'salmon', 'purple'];
  }

}
