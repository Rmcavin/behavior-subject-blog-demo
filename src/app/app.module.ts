import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { OutputComponent } from './output/output.component';
import { CounterService } from './services/counter.service';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
