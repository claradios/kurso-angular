import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptorService } from '../auth/auth-interceptor.service';
import { ChuckService } from './chuck.service';
import { ChuckComponent } from './chuck/chuck.component';

const config = { api: 'http://localhost:3001/api/' };

const ROUTES: Routes = [
  { path: '', component: ChuckComponent }
];

@NgModule({
  declarations: [ChuckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ],
  providers: [
    { provide: 'config', useValue: config },
    ChuckService,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
  ]
  // exports: [
  //   ChuckComponent // NO ES NECESARIO PONER EL COMPONENTE EN EXPORTS SI USAS LAZY LOADING
  // ]

})
export class ChuckModule { }
