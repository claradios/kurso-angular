import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatabindingModule } from './databinding/databinding.module';
import { DirectivasModule } from './directivas/directivas.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectivasModule,
    DatabindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
