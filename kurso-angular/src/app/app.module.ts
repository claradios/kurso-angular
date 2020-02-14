import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LayoutModule } from './layout/layout.module';
import { SimpleComponent } from './layout/simple/simple.component';
const config = {
  api: 'http://back'
};
const ROUTES: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'directivas',
        loadChildren: () => import('./directivas/directivas.module').then(m => m.DirectivasModule)

      },
      {
        path: 'databinding', canActivate: [AuthService],
        loadChildren: () => import('./databinding/databinding.module').then(m => m.DatabindingModule)
      },
      {
        path: 'chuck',  canActivate: [AuthService],
        loadChildren: () => import('./chuck/chuck.module').then(m => m.ChuckModule)
      },
    ]
  },
  {
    path: 'login',
    component: SimpleComponent,
    children: [
      {
        path: '', component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: 'config', useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
