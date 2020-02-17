import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { ChuckService } from './chuck/chuck.service';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { LayoutModule } from './layout/layout.module';
import { SimpleComponent } from './layout/simple/simple.component';
import { UsersModule } from './users/users.module';
const config = {
  api: 'http://localhost:3001/'
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
      {
        path: 'users',  canActivate: [AuthService],
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
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
    UsersModule,
    BrowserModule,
    LayoutModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: 'config', useValue: config },
    ChuckService,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
