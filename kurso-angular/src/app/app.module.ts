import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DirectivasModule } from './directivas/directivas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectivasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
