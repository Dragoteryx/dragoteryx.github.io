import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FactsComponent } from './facts/facts.component';
import { SymphogearComponent } from './symphogear/symphogear.component';
import { FactService } from './fact.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';


@NgModule({
  declarations: [
    AppComponent,
    FactsComponent,
    SymphogearComponent,
    HomeComponent,
    UnknownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
