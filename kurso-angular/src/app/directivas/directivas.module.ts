import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { ExampleDirectivasComponent } from './example-directivas/example-directivas.component';



@NgModule({
  declarations: [ExampleDirectivasComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ExampleDirectivasComponent
  ]
})
export class DirectivasModule { }
