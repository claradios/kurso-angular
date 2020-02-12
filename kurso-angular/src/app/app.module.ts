import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { LayoutModule } from './layout/layout.module';

const config = {
  api: 'http://back'
};
const ROUTES: Routes = [
  { path: 'directivas',
   loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)
  },
  { path: 'databinding', canActivate: [AuthService],
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
    LayoutModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: 'config', useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
