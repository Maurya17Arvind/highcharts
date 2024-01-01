import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-negative-column-chart',
  templateUrl: './negative-column-chart.component.html',
  styleUrls: ['./negative-column-chart.component.scss']
})
export class NegativeColumnChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  public chartOptions: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Column chart with negative values'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
        borderRadius: '25%'
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5]
    }]
  };


  constructor() { }

  ngOnInit(): void { }

}
