import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmService } from '../auth/confirm.service';
import { FirstService } from '../first.service';
import { SecondService } from '../second.service';
import { ChildComponent } from './child/child.component';
import { MotherComponent } from './mother/mother.component';


const ROUTES: Routes = [
  { path: '', component: MotherComponent},
  { path: ':child', component: ChildComponent, canDeactivate: [ConfirmService]}
  ];

@NgModule({
  declarations: [MotherComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    MotherComponent
  ],
  providers: [SecondService, FirstService]
})
export class DatabindingModule { }
