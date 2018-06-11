import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { PulseDirective } from './pulse.directive';
import { PulseToggleDirective } from './pulse-toggle.directive';
import { AppRoutingModule } from './/app-routing.module';
import { FactsComponent } from './facts/facts.component';
import { SymphogearComponent } from './symphogear/symphogear.component';
import { FactsService } from './facts.service';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { KeepHtmlPipe } from './keep-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnknownComponent,
    NavmenuComponent,
    PulseDirective,
    PulseToggleDirective,
    FactsComponent,
    SymphogearComponent,
    ChatbotComponent,
    KeepHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [FactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
