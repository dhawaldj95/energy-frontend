import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {EnergyComponent} from './energy/energy.component';
import { ChartsModule } from 'ng2-charts';
import {PieChartComponent} from './pieChart/piechart';
import {ServerService} from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    EnergyComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
