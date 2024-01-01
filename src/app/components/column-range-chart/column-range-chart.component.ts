import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-range-chart',
  templateUrl: './column-range-chart.component.html',
  styleUrls: ['./column-range-chart.component.scss']
})
export class ColumnRangeChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  // public chartOptions: any = {
  //   title: {
  //     text: 'Temperature variation by month'
  //   },
  //   // chart: {
  //   //   type: 'columnrange',
  //   //   inverted: true
  //   // },
  //   xAxis: {
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  //       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Temperature ( °C )'
  //     }
  //   },
  //   tooltip: {
  //     valueSuffix: '°C'
  //   },

  //   plotOptions: {
  //     columnrange: {
  //       borderRadius: '50%',
  //       dataLabels: {
  //         enabled: true,
  //         format: '{y}°C'
  //       }
  //     }
  //   },

  //   legend: {
  //     enabled: false
  //   },
  //   series: [{
  //     type: 'columnrange',
  //     name: 'Temperatures',
  //     data: [
  //       [-13.9, 5.2],
  //       [-16.7, 10.6],
  //       [-4.7, 11.6],
  //       [-4.4, 16.8],
  //       [-2.1, 27.2],
  //       [5.9, 29.4],
  //       [6.5, 29.1],
  //       [4.7, 25.4],
  //       [4.3, 21.6],
  //       [-3.5, 15.1],
  //       [-9.8, 12.5],
  //       [-11.5, 8.4]
  //     ]
  //   }]
  // };


  chartOptions: any = {
    chart: {
      type: 'columnrange',
    },
    title: {
      text: 'Columnrange Chart',
    },
    xAxis: {
      categories: ['Category 1', 'Category 2', 'Category 3'],
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Range',
        data: [
          [10, 50],
          [20, 60],
          [30, 70],
        ],
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
