import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {User} from './user.service';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [User],
  bootstrap: [AppComponent]
})
export class AppModule { }
