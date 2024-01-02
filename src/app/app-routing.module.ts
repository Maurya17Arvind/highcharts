import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyesCardComponent } from './components/analyes-card/analyes-card.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NegativeColumnChartComponent } from './components/negative-column-chart/negative-column-chart.component';
import { ColumnWithDrilldownComponent } from './components/column-with-drilldown/column-with-drilldown.component';
import { ColumnRangeChartComponent } from './components/column-range-chart/column-range-chart.component';
import { ThreeDChartComponent } from './components/three-d-chart/three-d-chart.component';
import { PictorialComponent } from './components/pictorial/pictorial.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: DataTableComponent
  },
  {
    path: 'chart/:id',
    component: ChartsComponent
  },
  {
    path: 'visualized/:id',
    component: AnalyesCardComponent
  },
  {
    path: 'negative-val-chart',
    component: NegativeColumnChartComponent
  },
  {
    path: 'drilldown-chart',
    component: ColumnWithDrilldownComponent
  },
  {
    path: 'range-chart',
    component: ColumnRangeChartComponent
  },
  {
    path: '3d-column-chart',
    component: ThreeDChartComponent
  },
  {
    path: 'pictorialt',
    component: PictorialComponent
  },
  {
    path: 'stock-chart',
    component: StockChartComponent
  },
  {
    path: '**',
    redirectTo: 'companies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
