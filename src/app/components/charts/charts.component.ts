import { Component, OnInit, ViewChild } from '@angular/core';
import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { muiltipleChart } from '../data';
import { ActivatedRoute } from '@angular/router';
import { ChartData, MultipleChartData } from '../common.interface';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @ViewChild('networkGraphChart') networkGraphChart = HighchartsChartComponent;
  Highcharts: typeof Highcharts = Highcharts;
  public multiChartData: MultipleChartData[] = muiltipleChart;
  public id!: string;
  public chartData: ChartData[] = [];
  public chartOptions: any = {
    title: {
      text: 'Company Analyzes Chart',
      align: 'center',
    },
    xAxis: {
      categories: [
        'Jet fuel',
        'Duty-free diesel',
        'Petrol',
        'Diesel',
        'Gas oil',
      ],
    },
    yAxis: {
      title: {
        text: 'Million liters',
      },
    },
    tooltip: {
      valueSuffix: ' million liters',
    },
    series: [],
  };

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.createChart();
  }

  createChart() {
    this.multiChartData.find((res: MultipleChartData) => {
      if (res.id === +this.id) {
        this.chartData = res.data;
        this.chartOptions.series = res.data;
      }
    });
  }
}
