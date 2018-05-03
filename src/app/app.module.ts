import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FactsComponent } from './facts/facts.component';
import { SymphogearComponent } from './symphogear/symphogear.component';
import { FactService } from './fact.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    FactsComponent,
    SymphogearComponent,
    HomeComponent,
    UnknownComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
