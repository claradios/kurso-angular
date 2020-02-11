import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {
  constructor() { }
  getMessage(): string {
    return 'Soy el segundo servicio';
  }
}
