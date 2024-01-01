import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyesCardComponent } from './components/analyes-card/analyes-card.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NegativeColumnChartComponent } from './components/negative-column-chart/negative-column-chart.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'companies',
    pathMatch:'full'
  },
  {
    path:'companies',
    component:DataTableComponent
  },
  {
    path:'chart/:id',
    component:ChartsComponent
  },
  {
    path:'visualized/:id',
    component:AnalyesCardComponent
  },
  {
    path:'range-chart',
    component:NegativeColumnChartComponent
  },
  {
    path:'**',
    redirectTo:'companies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
