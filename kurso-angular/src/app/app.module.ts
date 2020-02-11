import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  // { path: 'directivas', redirectTo: 'directivas', pathMatch: 'full'},
  // { path: 'databinding', redirectTo: 'databinding', pathMatch: 'full'},
  { path: 'directivas',
   loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)
  },
  { path: 'databinding',
  loadChildren: () => import('./databinding/databinding.module').then(m => m.DatabindingModule)
},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // DirectivasModule,
    // DatabindingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
