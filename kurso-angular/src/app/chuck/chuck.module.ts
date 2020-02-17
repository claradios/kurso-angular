import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckComponent } from './chuck/chuck.component';

// const config = { api: 'http://localhost:3001/' };

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

  ]
  // exports: [
  //   ChuckComponent // NO ES NECESARIO PONER EL COMPONENTE EN EXPORTS SI USAS LAZY LOADING
  // ]

})
export class ChuckModule { }
