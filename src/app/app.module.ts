import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './components/charts/charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DataTableComponent } from './components/data-table/data-table.component';
import { AnalyesCardComponent } from './components/analyes-card/analyes-card.component';
import { NegativeColumnChartComponent } from './components/negative-column-chart/negative-column-chart.component';
import { ColumnWithDrilldownComponent } from './components/column-with-drilldown/column-with-drilldown.component';
import { HeaderComponent } from './components/header/header.component';
import { ColumnRangeChartComponent } from './components/column-range-chart/column-range-chart.component';
import { ThreeDChartComponent } from './components/three-d-chart/three-d-chart.component';
import { PictorialComponent } from './components/pictorial/pictorial.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { StockChartAdvanceComponent } from './components/stock-chart-advance/stock-chart-advance.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    DataTableComponent,
    AnalyesCardComponent,
    NegativeColumnChartComponent,
    ColumnWithDrilldownComponent,
    HeaderComponent,
    ColumnRangeChartComponent,
    ThreeDChartComponent,
    PictorialComponent,
    StockChartComponent,
    StockChartAdvanceComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
