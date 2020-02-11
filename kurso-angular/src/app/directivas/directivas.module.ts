import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { ExampleDirectivasComponent } from './example-directivas/example-directivas.component';

const ROUTES: Routes = [
  { path: '', component: ExampleDirectivasComponent}
  ];
@NgModule({
  declarations: [ExampleDirectivasComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    ExampleDirectivasComponent
  ]
})
export class DirectivasModule { }
