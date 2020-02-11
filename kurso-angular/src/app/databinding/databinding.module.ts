import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MotherComponent } from './mother/mother.component';



@NgModule({
  declarations: [MotherComponent, ChildComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MotherComponent
  ]
})
export class DatabindingModule { }
