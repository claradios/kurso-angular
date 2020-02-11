import { Inject, Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private secondService: SecondService, @Inject('config')private config: any) { }
  getMessage(): any {
    return 'Hola hijo desde firstService' + this.config.api + this.secondService.getMessage();

  }
}
