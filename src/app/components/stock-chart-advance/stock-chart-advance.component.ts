import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import stock from 'highcharts/modules/stock';
import hollowcandlestick from 'highcharts/modules/hollowcandlestick';
import heikinashi from 'highcharts/modules/heikinashi';
import stockTool from 'highcharts/modules/stock-tools';
import exporting from 'highcharts/modules/exporting';
import accessibility from 'highcharts/modules/accessibility';
import fullScreen from 'highcharts/modules/full-screen';
import pricIndicator from 'highcharts/modules/price-indicator';
import annotationsAdvanced from 'highcharts/modules/annotations-advanced';
import dragPanes from 'highcharts/modules/drag-panes';
import { HttpClient } from '@angular/common/http';
stock(Highcharts);
hollowcandlestick(Highcharts);
exporting(Highcharts);
accessibility(Highcharts);
heikinashi(Highcharts);
stockTool(Highcharts);
fullScreen(Highcharts);
pricIndicator(Highcharts);
annotationsAdvanced(Highcharts);
dragPanes(Highcharts);

@Component({
  selector: 'app-stock-chart-advance',
  templateUrl: './stock-chart-advance.component.html',
  styleUrls: ['./stock-chart-advance.component.scss']
})
export class StockChartAdvanceComponent {

  Highcharts: typeof Highcharts = Highcharts;
  data: any;
  public chartOptions: any;
  constructor(private http: HttpClient) {
    this.http.get('https://cdn.jsdelivr.net/gh/highcharts/highcharts@c44c51a/samples/data/mini-ohlc.json').subscribe(async (res: any) => {
      this.chartOptions = {
        chart:{
          type:'candlestick',
          zoomType:'x'
        },
        rangeSelector: {
          enabled: true, //For show filter option by time
          selected: 1,
        },
        xAxis: {
          type: 'datetime', // Specify the type of x-axis, in this case, datetime
          title: {
            text: 'Date',
          },
        },
        stockTools: {
          gui: {
            enabled: true, // Set to true to enable the stock tools GUI
          },
        },
        navigator: {
          enabled: true, //For show zoomer chart option
          series: {
            color: 'red'
          }
        },
        yAxis: {
          plotBands: [{
            color: 'rgba(169, 255, 101, 0.4)',
            from: 182.94,
            to: 177.57,
            zIndex: 3,
            label: {
              text: 'Resistance Zone'
            }
          }]
        },

        annotations: [{
          type: 'fibonacci',
          langKey: 'Fibonacci',
          typeOptions: {
            points: [{
              x: 1631021400000,
              y: 157.26
            }, {
              x: 1633354200000,
              y: 157.26
            }],
            height: 138.27 - 157.26,
            xAxis: 0,
            yAxis: 0
          }
        }, {
          type: 'crookedLine',
          langKey: 'Trendline',
          typeOptions: {
            points: [{
              x: 1636727400000,
              y: 147.48
            }, {
              x: 1642516200000,
              y: 182.5
            }]
          },
          shapeOptions: {
            stroke: 'orange',
            strokeWidth: 2
          }
        }],

        series: [{
          id: 'main',
          type: 'candlestick',
          color: '#FF6F6F',
          upColor: '#6FB76F',
          data:res,
          dataGrouping: {
            enabled: false
          }
        }]
      };
      this.data = res;
    });
  }
}
