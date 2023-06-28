import { BasicHighlightDirective } from './basic-highlight.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { BetterHighlightDirective } from './better-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    BasicHighlightDirective,
    BetterHighlightDirective,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
