import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultipleChartData } from '../common.interface';
import { muiltipleChart } from '../data';

@Component({
  selector: 'app-analyes-card',
  templateUrl: './analyes-card.component.html',
  styleUrls: ['./analyes-card.component.scss'],
})
export class AnalyesCardComponent implements OnInit {
  public multiChartData:MultipleChartData[] = muiltipleChart;
  public data!: MultipleChartData;
  public id!: string;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.id = param['id'];
      this.getData();
    });
  }

  getData() {
    this.multiChartData.find((res: MultipleChartData) => {
      if (res.id === +this.id) {
        this.data = res;
      }
    });
  }
}
