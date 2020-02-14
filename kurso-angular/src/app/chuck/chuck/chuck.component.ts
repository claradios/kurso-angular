import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  quote: Observable<string>;
  protectedQuote: Observable<string>;

  constructor(private service: ChuckService) {}
  ngOnInit(): void {
    this.loadQuote();
  }
  loadQuote() {
    this.quote = this.service.getQuote();
  }
  loadProtectedQuote() {
    this.protectedQuote = this.service.getProtectedQuote();
  }

}
