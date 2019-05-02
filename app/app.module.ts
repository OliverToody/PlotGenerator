import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StartComponent } from './start/start.component';
import { PlotComponent } from './plot/plot.component';
import { MainComponent } from './main/main.component';
import { ResourcesComponent } from './resources/resources.component';
import { DataService} from './data.service';
import { EventEmitterService} from './event-emitter.service';
import { JsonComponent } from './json/json.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartComponent,
    PlotComponent,
    MainComponent,
    ResourcesComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
