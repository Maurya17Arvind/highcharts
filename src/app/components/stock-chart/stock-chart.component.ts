import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import stock from 'highcharts/modules/stock';
import hollowcandlestick from 'highcharts/modules/hollowcandlestick';
import exporting from 'highcharts/modules/exporting';
import accessibility from 'highcharts/modules/accessibility';
stock(Highcharts);
hollowcandlestick(Highcharts);
exporting(Highcharts);
accessibility(Highcharts);

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.scss']
})
export class StockChartComponent {

  Highcharts: typeof Highcharts = Highcharts;
  data: any;
  public chartOptions: any;
  constructor(private http: HttpClient) {
    this.http.get('https://demo-live-data.highcharts.com/aapl-ohlcv.json').subscribe((res: any) => {
      this.chartOptions = {
        chart: {
          type: 'line', // or other chart type
          zoomType: 'x', // 'x' for zooming along the x-axis, 'y' for y-axis, 'xy' for both
        },
        rangeSelector: {
          enabled: true, //For show filter option by time
          selected: 1,
          buttons: [
            {
              type: 'day',
              count: 1,
              text: '1d', // Change this label as needed
            },
            {
              type: 'week',
              count: 1,
              text: '1w', // Change this label as needed
            },
            {
              type: 'month',
              count: 1,
              text: '1m', // Change this label as needed
            },
            {
              type: 'all',
              count: 1,
              text: 'All', // Change this label as needed
            },
          ]
        },
        xAxis: {
          type: 'datetime', // Specify the type of x-axis, in this case, datetime
          title: {
            text: 'Date',
          },
        },
        navigator: {
          enabled: true, //For show zoomer chart option
          series: {
            color: 'red'
          }
        },
        series: [{
          type: 'hollowcandlestick',
          name: 'Hollow Candlestick',
          data: res
        }]
      };
      this.data = res;
    });
  }

}
