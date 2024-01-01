import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';// This is for enable advance options(download,fullscreen ect.)

exporting(Highcharts);// This is for enable advance options(download,fullscreen ect.)
highchartsMore(Highcharts);

@Component({
  selector: 'app-column-range-chart',
  templateUrl: './column-range-chart.component.html',
  styleUrls: ['./column-range-chart.component.scss']
})
export class ColumnRangeChartComponent {

  Highcharts: typeof Highcharts = Highcharts;
  public chartOptions: any = {
    chart: {
      type: 'columnrange',
      inverted: true
    },

    accessibility: {
      enabled:false,
      description: 'Image description: A column range chart compares the monthly temperature variations throughout 2017 in Vik I Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in March at minus 10.2 Celsius. The lowest range of temperatures is found in December ranging from a low of minus 9 to a high of 8.6 Celsius. The highest temperature is found in July at 26.2 Celsius. July also has the highest range of temperatures from 6 to 26.2 Celsius. The broadest range of temperatures is found in May ranging from a low of minus 0.6 to a high of 23.1 Celsius.'
    },

    title: {
      text: 'Temperature variation by month'
    },

    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    yAxis: {
      title: {
        text: 'Temperature ( °C )'
      }
    },

    

    plotOptions: {
      columnrange: {
        borderRadius: '50%',
        dataLabels: {
          enabled: true,
          format: '{y}°C'
        }
      },
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: this.onColumnClick.bind(this),
          },
        },
      },
    },

    legend: {
      enabled: true
    },

    series: [
      {
      name: 'Temperatures',
      tooltip: {
        valueSuffix: '°C'
      },
      data: [
        [-13.9, 5.2],
        [-16.7, 10.6],
        [-4.7, 11.6],
        [-4.4, 16.8],
        [-2.1, 27.2],
        [5.9, 29.4],
        [6.5, 29.1],
        [4.7, 25.4],
        [4.3, 21.6],
        [-3.5, 15.1],
        [-9.8, 12.5],
        [-11.5, 8.4]
      ]
    },
  ]
  };

  onColumnClick(event: any): void {
    // 'event' contains information about the click event
    const point = event.point;
    alert(`Hey Clicker
Low Val: ${point.low} & High Val: ${point.high}`);
  }
}
