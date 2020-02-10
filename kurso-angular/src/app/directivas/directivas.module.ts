import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleDirectivasComponent } from './example-directivas/example-directivas.component';



@NgModule({
  declarations: [ExampleDirectivasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleDirectivasComponent
  ]
})
export class DirectivasModule { }
